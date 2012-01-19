module My.Test.Module

open System

module SubModule1 =
    let add a b = a + b

module SubModule2 =
    let sub a b = a - b

    module SubModual2A =
        let mul a b = a * b

printfn "in My.Test.Module"



Console.ReadKey(true) |> ignore
