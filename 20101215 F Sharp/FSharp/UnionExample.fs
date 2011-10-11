module UnionExample

open System

type ballot =
    | Democrat
    | Republican
    | WriteIn of string

let elect castBallot =
    match castBallot with
    | Democrat -> "Barak Obama"
    | Republican -> "John McCain"
    | WriteIn(candidateName) -> candidateName

printfn "You voted for %A in 2008" (elect (WriteIn "Ron Paul"))
printfn "You voted for %A in 2008" (elect Democrat)
printfn "You voted for %A in 2008" (elect Republican)

(*
You voted for "Ron Paul" in 2008
You voted for "Barak Obama" in 2008
You voted for "John McCain" in 2008
*)



Console.ReadKey(true) |> ignore
