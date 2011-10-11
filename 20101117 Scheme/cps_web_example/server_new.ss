(load-shared-object "libc.so.6")
(load-shared-object "sockets.so.1")
(load-shared-object "chez_errno.so.1")
(import (arcfide modlisp))
 
(define db (make-eqv-hashtable))
(define (make-link id) (format "/example/scm/index?id=~a" id))


 
(define (index-handler req)
  (make-html-response
    (with-output-to-string 
      (lambda ()
        (import (oleg sxml-to-html))
        (sxml->html 
          '(html
             (head (title "Hello World!"))
             (body (h1 "Hello") (p "Isn't this cool?"))))))))
 
(define index-matcher (modlisp-subtree-matcher "/example/scm/index"))
 
(register-request-handler! index-matcher index-handler)
