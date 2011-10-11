module MappingListExample

open System

let numbers = [1; 2; 3; 4]

let incremented = List.map ((+) 1) numbers

printfn "%A" incremented // [2; 3; 4; 5]













Console.ReadKey(true) |> ignore