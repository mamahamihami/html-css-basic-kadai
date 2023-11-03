let num = Math.floor(Math.random() * 16);
console.log(num);
if (num === 3 || num === 6 || num === 9 || num == 12) {
    console.log('3の倍数です');
}
else if (num === 5 || num === 10) {
    console.log('5の倍数です');
}
else if (num === 0 || num === 15) {
    console.log('3と5の倍数です')
}
else {
    console.log(num);
}