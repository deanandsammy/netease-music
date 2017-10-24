<<<<<<< HEAD
if (1 > 2) {
    var val = 1;
    console.log(val);
    let val = 2;
}
=======
let arr = [1, 3, 5];
let len = arr.length;


// array 倒序排列实现
for (let i = 0; i < len / 2; i++) {
  let temp = arr[i];
  
  arr[i] = arr[len - 1 - i];
  arr[len - 1 - i] = temp;
}

arr.map()
>>>>>>> c1fc646b552a9c7ecd9d5eb0dd8ff95f1d965ae9
