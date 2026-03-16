const nums = [1, 2, 3, 4];
const newArr = nums.map((n) => {
    if(nums%2==0){
        return n*2;
    }
    else{
        return n*3;
    }

});
console.log(newArr);
console.log(nums);