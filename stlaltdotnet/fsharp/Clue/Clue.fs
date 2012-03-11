module Clue
open System

//http://en.wikipedia.org/wiki/Cluedo

let guess theory =

    let suspects =
        [| "Miss Scarlett"; "Colonel Mustard"; "Mrs. White"; "The Reverend Green"; "Mrs. Peacock"; "Professor Plum" |]

    let weapons =
        [| "Dagger"; "Candlestick"; "Revolver"; "Rope"; "Lead Pipe"; "Spanner" |]

    let rooms =
        [| "Kitchen"; "Ballroom"; "Conservatory"; "Dining Room"; "Cellar"; "Billiard Room"; "Library"; "Lounge"; "Hall"; "Study" |]

    let indexOf anArray anElement =
        Array.findIndex (fun e -> e = anElement) anArray

    let indicesOf aTheory  =
        let (s, w, r) = aTheory
        ((indexOf suspects s), (indexOf weapons w), (indexOf rooms r))

    let next g t =
        if g <> t then g + 1 else t

    let show guess =
       let s, w, r = guess
       printfn "%s with the %s in the %s" suspects.[s] weapons.[w] rooms.[r]
            
    let rec test guess theory =
        show guess
        if guess = theory then
            printfn "correct"
        else
            let (gs, gw, gr) = guess
            let (ts, tw, tr) = theory
            let newGuess = ((next gs ts), (next gw tw), (next gr tr))
            test newGuess theory

    test (0, 0, 0) (indicesOf theory)

//end guess

let main =
    printfn "--------------------"

    let theory1 = ("Mrs. White", "Rope", "Kitchen")
    guess theory1

    printfn "--------------------"

    let theory2 = ("Professor Plum", "Candlestick", "Lounge");
    guess theory2

    printfn "--------------------"

    let theory3 = ("The Reverend Green", "Spanner", "Ballroom");
    guess theory3

    printfn "--------------------"

    Console.ReadKey(true) |> ignore

//end main

main
