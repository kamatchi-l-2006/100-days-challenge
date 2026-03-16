const colors = ["red", "blue"];
colors.push("green");
colors[0] = "yellow";
colors = ["black"];

Answer: The code will throw an error at the line `colors = ["black"];`
 because `colors` is declared as a constant using `const`,
which means its reference cannot be changed. 
the contents of the array can be modified (like adding "green" and changing "red" to "yellow"),
but you cannot reassign the variable `colors` to a new array. 