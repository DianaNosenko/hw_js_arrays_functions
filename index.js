console.log('1. Вывести знак * столько раз сколько задаст пользователь');
function showSymbol (symbol, qua){
    while (qua>0){
        console.log(symbol);
        qua--;
    }
}
let num = prompt('Enter a number');
showSymbol('*',num);


console.log('2. Вывод чисел от limit1 до limit2, которые кратны num');
function showNumbers (lim1,lim2,num){
    let res = 0;
    while(lim2>=lim1){
        if (lim1%num == 0) {
            console.log(lim1);
        }
        lim1++
    }
    return res;
}
let lim1 = prompt('Enter lim1');
let lim2 = prompt('Enter lim2');
showNumbers(lim1,lim2,num);


console.log('3. Сумма четных элементов массива');
let a = [1, 5, 8, 6, 3, 10, 7, 5, 2, 4];
// Возвращает четные элементы масива
function findEvenNum(a) {
    let res = [], j = 0;
    for (let i = 0; i < a.length; i++) {
      if(a[i] % 2 == 0) {
        res[j] = a[i];
        j++;
    }
   }
    return res;
  }
// Возвращает сумму элементов
function sumArray(a){
    let sum = 0, res = 0;
    for(let i = 0; i < a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
// Возвращает сумму четных элементов массива
function findAndSummNumArray (a){
    let findArray = findEvenNum(a);
    let res = sumArray(findArray)
    return res;
}
console.log('Задан массив',a);
console.log('Массив четных элементов:',findEvenNum(a))
console.log('Сумма четных элементов массива:',findAndSummNumArray(a));



console.log('4. Обнулите все элементы массива меньше 10');
function nullEl(a){
    let j = 0, array2 = [] ;
for(let i=0; i<a.length; i++){
    if( a[i] < 10){
        array2[j] = a[i];
        a[i] = 0;
    }
}
return a;
}
result = nullEl(a);
console.log(result);