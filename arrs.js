const arr = [1, 2, 3, 4, 5]; 5
            0,1,2,3,4
console.log(arr.length);
console.log(arr[0]+2); //1+2
console.log(arr[1]+2);//2+2
console.log(arr[2]+2);//3+2
console.log(arr[3]+2);
console.log(arr[4]+2);

for(let i=2; i<arr.length; i++){
    console.log(arr[i]);
}   
// i=0, i<5
// arr[0]+2 = 3
// i=1 , i<5
// arr[1] +2 = 2+2 = 4
// i=2 , i<5
// arr[2]+2= 3+2 = 5
// i=3 , i<5
// arr[3]+2 = 4+2 = 6
// i=4 , i<5
// arr[4]+2 = 5+2 = 7
// i=5, i<5

for(let i of arr){
    console.log(i,"th"+"element:",i);
}
// arr= 1,2,3,4,5
// i=1
// i=2
// i=3
// i=4
// i=5     