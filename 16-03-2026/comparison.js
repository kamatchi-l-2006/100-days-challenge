console.log([] == false); //true
console.log([] === false); //false

Answer: The first comparison `[] == false` returns `true` because of type 
coercion in JavaScript. When using the loose equality operator `==`, 
JavaScript converts both sides to a common type before making the comparison. 
An empty array `[]` is considered a truth value,
 but when compared to `false`, it is coerced to an empty string `""`, 
 which is false. Therefore, the comparison evaluates to `true`.

The second comparison `[] === false` returns `false` because 
the strict equality operator `===` does not perform type coercion.
 It checks for both value and type. Since an empty array `[]` is of type "object"
  and `false` is of type "boolean", they are not strictly equal, 
  result in `false`.   


