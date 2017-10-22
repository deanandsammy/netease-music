let arr = [1, 3, 5];
let len = arr.length;

for (let i = 0; i < len / 2; i++) {
  let temp = arr[i];
  
  arr[i] = arr[len - 1 - i];
  arr[len - 1 - i] = temp;
}
