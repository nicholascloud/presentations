module PartialFunctionExample

open System

let tax = 0.7M 

//stuffing the price!
let calcRealPrice price uptick = 
    (price * (1M + tax)) + uptick

let calcPrice = calcRealPrice 2.0M

//pretending like we're just calculating the normal price
let price = calcPrice 5.00M

printfn "An item of $5.00 will cost %M" price

Console.ReadKey(true) |> ignore
