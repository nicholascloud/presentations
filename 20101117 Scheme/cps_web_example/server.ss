(import 
  (chezscheme) 
  (oleg sxml-to-html) 
  (arcfide modlisp) 
  (riastradh schemantic-web uri))

(define url-matcher (modlisp-subtree-matcher "/example/scm"))

(define (make-link id) (format "/example/scm/~a" id))

(define (make-page crumbs left right)
  `(html
     (head (title "Continuation Crumbs"))
     (body
       (h1 "Continuation Crumb Example")
       (p . ,crumbs)
       (p 
         (a (@ (href ,(make-link left))) "Left") 
         " " 
         (a (@ (href ,(make-link right))) "Right")))))

(define continuation-db (make-eqv-hashtable))
(define counter
  (let ([id 0])
    (lambda ()
      (set! id (1+ id))
      id)))

(define lookup-continuation 
  (let* ([s "/example/scm/"] [sl (string-length s)])
    (lambda (url)
      (let ([url-len (string-length url)])
        (and
          (> url-len sl)
          (string=? s (substring url 0 sl))
          (hashtable-ref continuation-db 
            (string->number (substring url sl url-len))
            #f))))))

(define (register-continuation k)
  (let ([id (counter)])
    (hashtable-set! continuation-db id k)
    id))

(define (make-sxml-response sxml)
  (make-html-response
    (with-output-to-string
      (lambda () (sxml->html sxml)))))

(define (build-response crumbs req)
  (define (left req) (build-response (cons "Left " crumbs) req))
  (define (right req) (build-response (cons "Right " crumbs) req))
  (modlisp-respond req
    (make-sxml-response
      (make-page crumbs 
        (register-continuation left)
        (register-continuation right)))))

(define (handler req)
  ((or 
     (lookup-continuation  
       (uri->string (get-modlisp-header req 'url (string->uri ""))))
     (lambda (req) (build-response '() req)))
    req))

(define (initialize . args)
  (register-request-handler! url-matcher handler)
  (start-modlisp-server 3000))
