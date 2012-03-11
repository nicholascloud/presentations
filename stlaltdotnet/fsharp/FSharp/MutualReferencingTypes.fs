module MutualReferencingTypes

type Numerator =
| Value of int

type Denominator =
| Value of int

and Fraction =
| Numerator of Numerator
| Denominator of Denominator
