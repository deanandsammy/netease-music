// Array.prototype.map 整理数据

let arr = [
  {key: 1, val: 10},
  {key: 2, val: 20},
  {key: 3, val: 30}
];

let con = arr.map((item) => {
  let tempObj = {};

  tempObj[item.key] = item.val;
  return tempObj;
});

// 字符串反转

function reverseStr(str) {
  return str.split('').reverse().join('');
}

function anoReverseStr(str) {
  return Array.prototype.map.call(str, item => item).reverse().join('')
}

let str = 'hello vuejs';

console.log(anoReverseStr(str));
