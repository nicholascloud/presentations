module ListComprehensionExample

open System
open System.IO

printfn ""
printfn "Basic comprehension expressions ----------------------------------------------------------"

//basic comprehensions
let numbers = [0 .. 9]
let alpha = ['A' .. 'Z']
let everyOtherNumber = [0 .. 2 .. 30]

printfn "%A" numbers
printfn "%A" alpha
printfn "%A" everyOtherNumber

printfn ""
printfn "Complex comprehension expressions --------------------------------------------------------"

//using a single loop to get a collection of numbers
let timesTwo = [ for i in 0 .. 10 do yield (i * 2) ]
printfn "%A" timesTwo

//using multiple loops to get a collection of numbers
let multiLoop = 
    [ for i in 0 .. 99 do
        for j in i .. 99 do
            yield i + j ]

printfn "multiLoop: %A" multiLoop

printfn ""
printfn "Comprehension expression using System.IO -------------------------------------------------"

//building a list of files recursively
let rec allFiles dir =
    seq { for file in Directory.GetFiles dir do
              yield file
          for subdir in Directory.GetDirectories dir do
              yield! allFiles subdir }

let top15Files = 
    allFiles @"c:\windows"
        |> Seq.take 15

Seq.iter (fun f -> printfn "file: %s" f) top15Files



Console.ReadKey(true) |> ignore
