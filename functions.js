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

        el.split('').forEach(function (letter, index) {
          letter.match(template) ? newArr.unshift(letter) : newArr[index] = letter;
        });

        newStr = newStr + ' ' + newArr.join('');
      });

      return newStr[1].toUpperCase() + newStr.slice(2);
    },

    sumOfMultipleNumbers: function (num) {
      let sum = 0;

      for (let i = 1; i < num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
          sum += i;
        }
      }

      return sum;
    }
  }
})();