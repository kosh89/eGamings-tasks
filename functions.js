(function () {
  window.myFunctions = {
    ipCheck: function (str) {
      const template = /^(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
      return template.test(str);
    },

    reverseWordsInSentence: function (str) {
      if (!str) {
        return 'Insert your sentence'
      }

      const template = /^([A-Za-zА-Яа-я0-9]?)$/;
      let newStr = '';

      str.toLowerCase().split(' ').forEach(function (el) {
        const newArr = [];

        el.split('').forEach(function (letter, index, str) {
          if (letter.match(template) || str[index + 1] && str[index+1].match(template)) {
            newArr.unshift(letter);
          } else {
            newArr[index] = letter;
          }
        });

        newStr = newStr + ' ' + newArr.join('');
      });

      return newStr[1].toUpperCase() + newStr.slice(2);
    },

    sumOfMultipleNumbers: function (num) {
      let sum3 = 0;
      let sum5 = 0;
      let sum35 = 0;

      for (let i = 3; i < num; i += 3) {
        sum3 += i;
      }

      for (let i = 5; i < num; i += 5) {
        sum5 += i;
      }

      for (let i = 15; i < num; i += 15) {
        sum35 += i;
      }

      return sum3 + sum5 - sum35;
    }
  }
})();