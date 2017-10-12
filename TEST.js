let n = 7;
let o = n / 2;
let t = 1;
let step = 2;

// 输出七行星星
for (let i = 0; i < n; i++) {
    // 输出占位空格
    for (let j = 0; j < Math.floor(o); j++) {
        console.log(' ');
    }

    // 打印星星
    for (let k = 0; k <= t; k++) {
        console.log('*');
    }
    console.log('\n');
}