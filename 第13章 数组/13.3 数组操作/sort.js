var arr = [98, 1, 21, 8, 12, 2, 10, 25];
arr.sort(function(a, b) {
    return a > b ? 1 : -1;
});
console.log(arr);