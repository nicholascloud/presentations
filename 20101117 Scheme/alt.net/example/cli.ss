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
 
(define (lr-repl crumbs)
  (let ([dir (get-direction crumbs)])
    (unless (eof-object? dir)
      (lr-repl (cons dir crumbs)))))

(define (lefty-righty) (lr-repl '()))
