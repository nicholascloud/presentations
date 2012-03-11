module RecursiveExample

open System

type product = {
    Name : string;
    Price : decimal;
}

let cherry = { Name = "Cherry"; Price = 0.1M }
let apple = { Name = "Apple"; Price = 1.0M }
let peach = { Name = "Peach"; Price = 0.75M }

let rec calculateTotal basket =
    match basket with
    | head :: tail -> head.Price + calculateTotal tail
    | [] -> 0M

let basket = [ cherry; apple; peach ]

printfn "Your total: $%A" (calculateTotal basket) //$1.85




let calculateTotalTR basket =
    let rec calc basket total = 
        match basket with
        | head :: tail -> calc (tail) (total + head.Price)
        | _ -> total
    calc basket 0M

printfn "Your total: $%A" (calculateTotalTR basket) //$1.85





Console.ReadKey(true) |> ignore