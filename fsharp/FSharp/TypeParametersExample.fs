module TypeParametersExample

type 'value LinkedListNode =
| Value of 'value
| Left of 'value LinkedListNode
| Right of 'value LinkedListNode

//or

(*
type LinkedListNode<'value> =
| Value of 'value
| Left of LinkedListNode<'value>
| Right of LinkedListNode<'value>
*)