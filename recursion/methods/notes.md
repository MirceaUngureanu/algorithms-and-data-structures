Pure recursion tips:
- for array, use methods like `slice` `...spread` `concat` that make copies of the arrays so you don't mutate them
- strings are immutable so we will need to use methods like `slice` `substring` `substr` to make copies of the string
- with objects we use `Object.assign` `...spread`