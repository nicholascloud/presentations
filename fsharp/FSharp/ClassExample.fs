open System

(* implicit class definition *)

type Email (toEmail : string, fromEmail : string, subject : string) = class
    
    let mutable _attachments = [] : string list

    member x.ToEmail = toEmail
    member x.FromEmail = fromEmail
    member x.Subject = subject

    member x.Attachments = _attachments

    member x.AddAttachment (attachment : string) =
        _attachments <- attachment :: _attachments

    member x.PrintMe = 
        printfn "ToEmail: %s, FromEmail: %s, Subject: %s" x.ToEmail x.FromEmail x.Subject
        printfn "Attachments: %i" x.Attachments.Length
        _attachments |> List.iter (fun a -> printfn "attachment: %s" a)

end

let e1 = new Email("to@example.com", "from@example.com", "a subject")
e1.AddAttachment("new attachment 1")
e1.AddAttachment("new attachment 2")
e1.PrintMe



Console.ReadKey(true) |> ignore
