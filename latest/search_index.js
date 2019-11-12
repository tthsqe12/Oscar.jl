var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Welcome to Oscar",
    "title": "Welcome to Oscar",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#Welcome-to-Oscar-1",
    "page": "Welcome to Oscar",
    "title": "Welcome to Oscar",
    "category": "section",
    "text": "Oscar is a new computer algebra system under development."
},

{
    "location": "integer.html#",
    "page": "Integers",
    "title": "Integers",
    "category": "page",
    "text": "CurrentModule = Oscarusing OscarPages = [\"integer.md\"]"
},

{
    "location": "integer.html#Integers-1",
    "page": "Integers",
    "title": "Integers",
    "category": "section",
    "text": "An important design decision in Oscar.jl is to use Julia as the user language by default. This means that integers typed at the REPL are Julia integers. However, for performance reasons, Oscar has its own integer format.In the following, unless stated otherwise, when we refer to integers we mean Oscar integers; when we refer to an Int we mean the Julia Int."
},

{
    "location": "integer.html#Constructors-1",
    "page": "Integers",
    "title": "Constructors",
    "category": "section",
    "text": "Oscar integers are created using the ZZ constructor.ZZ(2)^100\nZZ(618970019642690137449562111)One can also construct the zero integer with the empty constructor:ZZ()The following special constructors are also provided:zero(ZZ) : the integer 0\none(ZZ) : the integer 1"
},

{
    "location": "integer.html#Limitations-1",
    "page": "Integers",
    "title": "Limitations",
    "category": "section",
    "text": "Oscar integers have the same limitations as GMP multiprecision integers, namely that they are limited by the available memory on the machine and in any case to signed integers whose absolute value does not exceed 2^37 bits.note: Note\nThe Julia \'Int\' type is either a 32 or 64 bit integer, depending on the machine architecture (usually 64 bits on most modern machines). The range of values is machine dependent, but can be found by typing \'typemin(Int)\' and \'typemax(Int)\' in Julia."
},

{
    "location": "integer.html#Julia-integers-in-Oscar-functions-1",
    "page": "Integers",
    "title": "Julia integers in Oscar functions",
    "category": "section",
    "text": "For convenience, basic arithmetic and exact division functions in Oscar also accept Julia integers. For example:divexact(ZZ(234), 2)In this example, 2 is a Julia integer but is still valid in the call to the Oscar function divexact.A number of other integer functions also accept Julia Int\'s, as noted below."
},

{
    "location": "integer.html#Predicates-and-properties-1",
    "page": "Integers",
    "title": "Predicates and properties",
    "category": "section",
    "text": "The following predicates are provided, which return true or false:iszero(n) : n = 0\nisone(n) : n = 1\nisunit(n) : n = pm 1\nissquare(n)\nisprime(n)\nisprobable_prime(n)The isprime predicate will prove primality, whereas isprobable_prime may declare a composite number to be prime with very low probability.Negative numbers, 0 and 1 are not considered prime by these predicates.The following properties can also be computed:sign(n) returns the sign of n, i.e. nn if n neq 0 or 0 otherwise. The return value is a Julia Int.sign(ZZ(23))\nsign(ZZ(0))\nsign(ZZ(-1))Every object in Oscar representing a mathematical element has a parent. This is an object encoding information about where that element belongs.The parent of an Oscar integer is the ring of integers ZZ.R = parent(ZZ(2))\nR == ZZ"
},

{
    "location": "integer.html#Basic-arithmetic-1",
    "page": "Integers",
    "title": "Basic arithmetic",
    "category": "section",
    "text": "Oscar provides the basic arithmetic operations +, - and * and comparison operators ==, !=, <, <=, >, >=, including mixed operations between Julia and Oscar integers. It also provides division and powering as described below."
},

{
    "location": "integer.html#Division-in-Oscar-1",
    "page": "Integers",
    "title": "Division in Oscar",
    "category": "section",
    "text": "Oscar distinguishes a number of different kinds of division:Exact division (divexact)\nEuclidean division (div, rem, divrem and mod)\nConstruction of fractions (a//b)\nFloating point division (a/b)\nDivisibility testing (divides)These choices have been made for maximum parsimony with the Julia language.note: Note\nIt is a common error to enter \'1/2\' for the fraction \'one half\' in Julia. This expression is reserved for floating point division. Instead, the double slash operator \'//\' should be used for fractions."
},

{
    "location": "integer.html#integer_exact_division-1",
    "page": "Integers",
    "title": "Exact Division",
    "category": "section",
    "text": "Exact division is carried out using the divexact function.The result of the exact division of two integers will always be another integer. Exact division raises an exception if the division is not exact, or if division by zero is attempted.divexact(ZZ(6), ZZ(3))\ndivexact(ZZ(6), ZZ(0))\ndivexact(ZZ(6), ZZ(5))"
},

{
    "location": "integer.html#Powering-1",
    "page": "Integers",
    "title": "Powering",
    "category": "section",
    "text": "Powering of integers is performed using the caret operator ^. The exponent can be any Julia Int.ZZ(37)^37\nZZ(1)^(-2)note: Note\nAn exception will be raised if an integer other than -1 or 1 is raised to a negative exponent.The following is allowed for convenience.ZZ(0)^0note: Note\nIn Julia, \'2^64\' will return 0, as the Julia integer 2 is a machine word. In Oscar, the expression \'ZZ(2)^64\' will return the expected result."
},

{
    "location": "integer.html#integer_euclidean_division-1",
    "page": "Integers",
    "title": "Euclidean division",
    "category": "section",
    "text": "The ring of integers is a Euclidean domain and Oscar provides Euclidean division.In a Euclidean domain in Oscar the divrem function returns both quotient and remainder, div returns just the quotient and rem returns just the remainder.For integers, Euclidean division of a by n computes a quotient and remainder such thata = qn + rwhere r  n. For conformity with Julia, when r neq 0 the sign of r will be the same as the sign of a.If one instead wants Euclidean remainder with r and n having the same sign, one can use mod. Then if n  0 the remainder will be non-negative.remainder division sign rounding\nrem div/divrem same as dividend towards zero\nmod  same as divisor towards -inftyq, r = divrem(ZZ(5), ZZ(3))\nq = div(ZZ(7), ZZ(2))\nr = mod(ZZ(4), ZZ(3))All three functions raise an exception if the modulus m is zero.note: Note\nThe rem function does not provide a minimal set of representatives, e.g. rem(-2, 3) = -2 but rem(1, 3) = 1.All integer Euclidean division functions accept a Julia Int for one of their arguments."
},

{
    "location": "integer.html#integer_divisibility_testing-1",
    "page": "Integers",
    "title": "Divisibility testing",
    "category": "section",
    "text": "Divisibility testing is performed using the divides function.In Oscar, we say that b divides a if there exists c in the same ring such that a = bc.The call divides(a, b) returns a tuple (flag, q) where flag is either true if b divides a in which case q will be a quotient, or flag is false if b does not divide a and q will be an integer whose value is not defined.divides(ZZ(6), ZZ(3))\ndivides(ZZ(5), ZZ(2))Note that for convenience we define:divides(ZZ(0), ZZ(0))"
},

{
    "location": "integer.html#GCD-and-LCM-1",
    "page": "Integers",
    "title": "GCD and LCM",
    "category": "section",
    "text": "The gcd function returns the greatest common divisor of its inputs, which is by definition the largest integer dividing the two inputs unless both inputs are zero in which case it returns zero. The result will always be non-negative and will only be zero if both inputs are zero.gcd(ZZ(34), ZZ(17))\ngcd(ZZ(3), ZZ(0))The lcm function returns the least positive multiple of its inputs, unless one or more of its inputs is zero, in which case it returns zero.lcm(ZZ(6), ZZ(21))\nlcm(ZZ(0), ZZ(0))note: Note\nThe identity gcd(m n)mathrmlcm(m n) = mn does not hold for the definition that Oscar uses, unless both m and n are the same sign or one of them is zero.Both gcd and lcm accept Julia Int\'s for one of their arguments."
},

{
    "location": "integer.html#Roots-1",
    "page": "Integers",
    "title": "Roots",
    "category": "section",
    "text": "Julia and Oscar distinguish two kinds of square root:Integer square root (isqrt)\nFloating point square root (sqrt)The isqrt function returns the floor of the square root of its argument, i.e. the largest integer whose square does not exceed its input. An exception is raised if a negative input is passed.isqrt(ZZ(16))\nisqrt(ZZ(0))\nisqrt(ZZ(5))\nisqrt(ZZ(-3))If the remainder is also required, there is the isqrtrem function. It returns a tuple (s, r) such that s is the same as the return value of the isqrt function and s^2 + r is equal to the input.isqrtrem(ZZ(16))\nisqrtrem(ZZ(5))The function root(a, n) will return the value of largest absolute value whose n-th power does not exceed a. When n is even, a must be non-negative and the return value will always be non-negative. The value of a may be negative if n is negative. The value n must always be a positive Julia Int.root(ZZ(16), 4)\nroot(ZZ(5), 2)\nroot(ZZ(-5), 3)\nroot(ZZ(0), 4)\nroot(ZZ(-5), 2)\nroot(ZZ(12), -2)"
},

{
    "location": "integer.html#Conversions-1",
    "page": "Integers",
    "title": "Conversions",
    "category": "section",
    "text": "Oscar integers can be converted to Julia Int\'s and BigInt\'s in the usual Julia way:n = ZZ(123)\nInt(n)\nBigInt(n)If the Oscar integer is too large to fit in an Int, an exception is raised.Int(ZZ(12348732648732648763274868732687324))The fits function can be used to determine whether an Oscar integer will fit in a Julia Int:fits(Int, ZZ(12348732648732648763274868732687324))"
},

]}