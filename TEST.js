/*// Array.prototype.map 整理数据

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

// console.log(anoReverseStr(str));

// apply

let o = {
  name: 'Nicholas',
  getName() {
    return function () {
      console.log(arguments[0]);
    }
  }
};

function getName() {
  return o.getName.apply(o, arguments[0]);
}

// console.log(getName()(1));

// splice 实现

let arrA = [1, 2, 3, 4, 5];

function isArray(arrA) {
  return Object.prototype.toString.call(arrA).substr(8, 5).toLowerCase() === 'array'
}

function implementSplice(arr, startIndex, num) {
  if (isArray(arr)) {
    let arrStore = [];
    let len = arr.length;
    let onOff = true;

    for (let i = 0; i < len; i++) {
      if (i === startIndex) {
        onOff = false;
        len--;
        arrStore[i] = arr[i + 1];
        continue
      }

      if (onOff) {
        arrStore[i] = arr[i];
      } else {
        arrStore[i] = arr[i + 1];
      }
    }
    return arrStore;
  }
}*/

// console.log(implementSplice(arrA, 1));

// width and height in javascript

/*
function b() {
  console.log(val);
}

function a() {
  b();
  let val = 2
}

let val = 1;

a();
*/

/*let str = 'hello';

str[0] = '1';
console.log(str);*/

/*let arr = [1, 2, 3];

arr[0] = 'hello';
console.log(arr);*/

// TODO: JS中的函数重载

