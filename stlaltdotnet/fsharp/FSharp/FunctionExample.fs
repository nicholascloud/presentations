module FunctionExample

open System

let greet firstName lastName =
    printfn "%A" ("Welcome, " + firstName + " " + lastName + "!")

greet "Han" "Solo"





Console.ReadKey(true) |> ignore