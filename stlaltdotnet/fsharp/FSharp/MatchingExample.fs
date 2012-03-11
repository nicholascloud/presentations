module MatchingExample

open System

let greet name =
    match name with
    | "Steve" -> "Hi Steve!"
    | "Bob" -> "Hello Bob."
    | n -> "Who are you " + n + "?"

printfn "%A" (greet "Tom")


let donate amount =
    match amount with
    | x when x <= 0 -> "cheapskate"
    | small when small < 100 -> "generous"
    | _ -> "most generous"

printfn "Ed donated $110 which makes him %A" (donate 110)


let playLotto numbers =
    match numbers with
    | (10, 3, 1, 22) -> 10000
    | (10, 3, 66, 3) | (10, 6, 26, 0) -> 5000
    | (78, 3, 22, 1) -> 1000
    | _ -> 0

printfn "Your lotto numbers have won $%A" (playLotto (10, 6, 26, 0))






Console.ReadKey(true) |> ignore
