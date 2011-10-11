(load-shared-object "libc.so.6")
(load-shared-object "sockets.so.1")
(load-shared-object "chez_errno.so.1")
 
(import (arcfide modlisp))
 
(define (get-direction req id crumbs)
  (call-with-current-continuation
    (lambda (k)
      (register-continuation! id k)
      (modlisp-respond req
        (make-html-response
          (with-output-to-string 
            (lambda () (import (oleg sxml-to-html))
              (sxml->html
                `(html (head (title "Crumbs"))
                   (body (h1 "Crumbs")
                     (p ,(format "~{~a~^ ~}
                           " crumbs))
                     (form (@ (action "/example/scm/crumbs"))
                       (input (@ (type "hidden") (name "session")
                                 (value ,(number->string id))))
                       (input (@ (type "submit") (name "dir")
                                 (value "left")))
                       (input (@ (type "submit") (name "dir")
                                 (value "right"))))))))))))))
 
(define (lr-repl req id crumbs)
  (let ([req (get-direction req id crumbs)])
    (let ([dir (get-modlisp-parameter 'dir req)])
      (if dir 
          (lr-repl req id (cons dir crumbs))
          (lr-repl req id crumbs)))))

(define (crumbs-handler req)
  (let ([res (get-modlisp-parameter 'session req)])
    ((or (and res (lookup-continuation (string->number res)))
         (lambda (req) (lr-repl req (gen-id) '())))
     req)))
 
(define crumbs-matcher 
  (modlisp-subtree-matcher "/example/scm/crumbs"))
 
(define db (make-eqv-hashtable))
 
(define gen-id
  (let ([i 0])
    (lambda ()
      (set! i (1+ i))
      i)))
 
(define (lookup-continuation id)
  (hashtable-ref db id #f))
 
(define (register-continuation! id k)
  (hashtable-set! db id k))

(define (initialize . args)
  (register-request-handler! crumbs-matcher crumbs-handler)
  (start-modlisp-server 3000))

