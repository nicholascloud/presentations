module RecordExample

open System

type Customer = { 
    FirstName: string; 
    LastName: string; 
    PhoneNumbers: list<int> 
}

let (buyer: Customer) = { 
    FirstName = "Walter"; 
    LastName = "Brown"; 
    PhoneNumbers = [5551212; 3331212]
}

printfn "buyer: %A" buyer



type Buyers = { FirstName: string; LastName: string; AccessCodes: list<int> }

let buyers = 
    [ {FirstName = "Sam"; LastName = "Smith"; AccessCodes = [177]}; 
      {FirstName = "YoYo"; LastName = "Maw"; AccessCodes = [123]};
      {FirstName = "Gerald"; LastName = "Smith"; AccessCodes = [333]} ]

let rec findFirstWithLastName lastName buyerList =
    match buyerList with
    | head :: tail 
        when head.LastName = lastName -> head
    | _ :: tail -> findFirstWithLastName lastName tail
    | [] -> failwith ("No one with last name " + lastName)

printfn "%A" (findFirstWithLastName "Smith" buyers)

(*
{FirstName = "Sam";
 LastName = "Smith";
 AccessCodes = [177];}
*)

let adminCode = 333;

let rec findFirstWithAdminCode buyerList =
    match buyerList with
    | { FirstName = fn; LastName = ln; AccessCodes = codes } :: tail when (List.exists (fun i -> i = 333) codes) -> fn + " " + ln
    | _ :: tail -> findFirstWithAdminCode tail
    | [] -> failwith "No one with admin code 333"


printfn "%A" (findFirstWithAdminCode buyers)

// "Gerald Smith"

let i = Console.ReadLine()