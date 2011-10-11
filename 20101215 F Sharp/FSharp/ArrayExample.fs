module ArrayExample

open System
open System.IO

printfn ""
printfn "Getting sum of all file sizes in the current directory -----------------------------------"

let files = Directory.GetFiles(".", "*.fs", SearchOption.AllDirectories)

let totalSize =
    files
    |> Array.map (fun file -> FileInfo file)
    |> Array.map (fun info -> info.Length)
    |> Array.sum

printfn "Total files %d sum to %d" (files.Length) totalSize


Console.ReadKey(true) |> ignore
