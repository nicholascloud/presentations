module TupleExample

open System

let myName = ("Nicholas", "Cloud")

let firstName, lastName = myName

printfn "%A" firstName  //Nicholas
printfn "%A" lastName   //Cloud

let firstNameOnly, _ = myName

printfn "%A" firstNameOnly  //Nicholas





Console.ReadKey(true) |> ignore