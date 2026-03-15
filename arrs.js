const arr = [1, 2, 3, 4, 5]; 
console.log(arr.length);
console.log(arr[0]+2); //1+2
console.log(arr[1]+2);//2+2
console.log(arr[2]+2);//3+2
console.log(arr[3]+2);
console.log(arr[4]+2);

for(let i=2; i<arr.length; i++){
    console.log(arr[i]);
}   

for(let i of arr){
    console.log(i,"th"+"element:",i);
}
