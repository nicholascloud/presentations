(load-shared-object "libc.so.6")
(load-shared-object "sockets.so.1")
(load-shared-object "chez_errno.so.1")
 
(import (arcfide modlisp))
(import (oleg sxml-to-html))
 
(define (get-direction req id crumbs)
  (call-with-current-continuation
    (lambda (k)
      (register-continuation! id k)
      (modlisp-respond req 
        (make-html-response
          (with-output-to-string
            (lambda ()
              (sxml->html
                `(html (head (title "Crumbs"))
                   (body (h1 "Crumbs")
                     (p ,(format "~{~a~^ ~}" crumbs))
                     (form (@ (action "/example/scm/crumbs"))
                       (input (@ (type "hidden")
                                 (name "session")
                                 (value ,(number->string id))))
                       (input (@ (type "submit")
                                 (name "dir") (value "Left")))
                       (input (@ (type "submit")
                                 (name "dir") 
                                 (value "Right"))))))))))))))
 
(define (get-direction crumbs)
  (define (prompt)
    (printf "Enter direction [left/right]: "))
  (printf "~{~a~^ ~}~n~n" crumbs)
  (prompt)
  (let ([res (read)])
    (if (or (eof-object? res) (memq res '(left right)))
        res
        (begin
          (prompt)
          (loop (read))))))
 
(define (lr-repl req id crumbs)
  (let ([req (get-direction req id crumbs)])
    (let ([res (get-modlisp-parameter 'dir req)])
      (if res
          (lr-repl req id (cons res crumbs))
          (lr-repl req id crumbs)))))

(define crumbs-matcher
  (modlisp-subtree-matcher "/example/scm/crumbs"))
 
(define (crumbs-handler req)
  (let ([res (get-modlisp-parameter 'session req)])
    ((or (and res (lookup-continuation (string->number res)))
         (lambda (req) (lr-repl req (gen-id) '())))
     req)))
 
(define gen-id
  (let ([i 0])
    (lambda ()
      (set! i (1+ i))
      i)))
 
(define db (make-eqv-hashtable))
 
(define (lookup-continuation id) (hashtable-ref db id #f))
(define (register-continuation! id k) (hashtable-set! db id k))
 
