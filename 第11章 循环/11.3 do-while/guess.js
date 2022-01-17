//产生1-100之间的随机数
var answer = Math.floor(Math.random() * 100) + 1;
var num = 0;
var cnt = 0;

do {
    num = parseInt(prompt("猜一个1-100之间的数字"));
    cnt++;

    if(num > answer) {
        alert("猜大了！");
    } else if(num < answer) {
        alert("猜小了！");
    }
} while(num != answer);

alert("猜对了！你一共用了" + cnt + "次猜对！");