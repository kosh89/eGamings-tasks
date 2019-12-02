const reverseWordsInSentence = function (str) {
  const template = /^([A-Za-zА-Яа-я]?)$/; 
  let newStr = '';
    
  str.toLowerCase().split(' ').forEach(function (el) {
    const newArr = [];

    el.split('').forEach(function (letter, index) {
      letter.match(template) ? newArr.unshift(letter) : newArr[index] = letter;
    });

    newStr = newStr + ' ' + newArr.join('');        
  });

  return newStr[1].toUpperCase() + newStr.slice(2);  
};

console.log(reverseWordsInSentence('Абв где, ёжз!'));
console.log(reverseWordsInSentence('Abc def, ghi!'));