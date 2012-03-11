module OperatorExample

open System

// pass operator as function argument
let perform operator operand1 operand2 = operator operand1 operand2

// assign operator to identifier
let add = (+)

let result = perform add 1 2

printfn "%A" result



let (+*) a b = (a + b) * b

let result2 = 2 +* 4 // 24

printfn "%A" result2




Console.ReadKey(true) |> ignore