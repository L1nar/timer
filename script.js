console.log('До setTimeout');
setTimeout(() => {
    console.log('Сработал таймер на 3000');
}, 3000);
setTimeout(() => {
    console.log('Сработал таймер на 500');
}, 500);

console.log('После setTimeout');
console.log('До цикла for');
console.time('timer');
for (let i = 1; i < 2000000000; i++) {
    let a = i / i;
}
console.timeEnd('timer');
console.log('После цикла for');