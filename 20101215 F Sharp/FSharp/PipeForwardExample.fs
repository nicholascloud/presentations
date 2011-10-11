module PipeForwardExample

open System

let squareFunction s = s * s

let result = 10 |> squareFunction // 100

printfn "%A" result








Console.ReadKey(true) |> ignore
