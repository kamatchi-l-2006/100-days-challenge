const nums = [1, 2, 3, 4];
const newArr = nums.map((n) => {
    if(n%2==0){
        console.log("its even");
    }
    else{
        console.log("its odd");
    }
});
console.log(newArr);
console.log(nums);