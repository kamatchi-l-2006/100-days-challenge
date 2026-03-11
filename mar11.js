//loop the array
console.log("LOOP THE ARRAY");
const arr=["vivo","realme","oneplus"];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//switch statement
console.log("SWITCH STATEMENT");
const day=3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Boom day"); 
        break;
}

// if else statement
console.log("IF ELSE STATEMENT");
const mark=85;
if(mark>=90){
    console.log("Grade A");
}
else if(mark>=80){
    console.log("Grade B");
}
else if(mark>=70){
    console.log("Grade C");
}                       
else if(mark>=60){
    console.log("Grade D");
}   
else if(mark>=50){
    console.log("Grade E");
}
else{
    console.log("Grade F");
}

// variable types
console.log("VARIABLE TYPES");
let name="kamzz";
const age=25;
var city="thanjore";
console.log("Name: ",name);
console.log("Age: ",age);
console.log("City: ",city);


// operators
console.log("OPERATORS");
let a=10;
let b=5;
// arithmetic operator(addition, subtraction, multiplication, division)
console.log("ARITHMETIC OPERATION");
console.log("Addition: ",a+b);
console.log("Subtraction: ",a-b);
console.log("Multiplication: ",a*b);
console.log("Division: ",a/b);          
// assignment operator
console.log("ASSIGNMENT OPERATION");
let c=a;    
console.log("Assignment:",c);
// comparison operator
console.log("COMPARISON OPERATION");
console.log("Greater than:",a>b); 
console.log("Less than:",a<b);
console.log("Equal to:",a==b);
console.log("Not equal to:",a!=b);
// logical operator
console.log("LOGICAL OPERATION");
console.log("Logical AND:",a>5 && b<10); 
console.log("Logical OR:",a>5 || b<10);
console.log("Logical NOT:",!(a>5));
// assignment operator
console.log("ASSIGNMENT OPERATION");
let d=20;
d+=5;
console.log("Addition Assignment:",d);
d-=5;
console.log("Subtraction Assignment:",d);
d*=2;
console.log("Multiplication Assignment:",d);
d/=2;
console.log("Division Assignment:",d);



// Loop types
console.log("LOOP TYPES");
// for loop
console.log("FOR LOOP");
for(let i=0;i<=10;i++){
    console.log("for: ",i);
}
// while loop
console.log("WHILE LOOP");
let i=1;
while(i<=10){
    console.log("While: ",i);
    i++;
}
// Do while Loop
console.log("DO WHILE LOOP");
let j=1;
do{
    console.log("Do while: ",j);
    j++;
}
while(j<=10);
// For of Loop
console.log("FOR..OF LOOP");
for(const element of arr){
    console.log("For of: ",element);
}
