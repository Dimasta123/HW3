//функция максимального числа
const findMax = n => +Math.max(...(n + '').split(''));
console.log(findMax(3295566));
//функция возведения в степень числа

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

console.log(pow(3, 7));
//функция имяисправления
function nameEditor(name) {
  let firstLetter = name.slice(0, 1).toUpperCase();
  let restOfName = name.slice(1).toLowerCase();
  return firstLetter + restOfName;
}
console.log(nameEditor('sAnYarC'));
//функция вычета налогов из дахода
function clearMoney(sallary) {
  let percents = sallary * 0.195;
  return (sallary - percents).toFixed(2);
}
console.log(clearMoney(14100));
//фунция случайного числа в диапазоне
function randomNumber(firstNumber, secondNumber) {
  let numberMake = Math.floor(
    Math.random() * (secondNumber - firstNumber + 1),
  ) + firstNumber;
  return numberMake;
}
console.log(randomNumber(1, 10));
//функция счетабукв
function letterCounter(letter, word) {
  let count = 0;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }
  return `Колличество букв ${letter} в ${word} равно ${count}`;
}
console.log(letterCounter('a', 'afpdlfpdsflsadasffd'));
//функция конвертер валют
//function moneyConvert(value) {
//  const dollar = 28.35;
//  let totalAmount = '';
//  if (value.slice(-1) === $) {
//    totalAmount = (value * dollar).toFixed(2);
//  }
//  return `столько гривен будет в долларах ${totalAmount}+ uah`;
//}
