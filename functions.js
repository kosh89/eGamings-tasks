(function () {
  const punctChars = /^([!?.,:;%]?)$/;

  const checkFirst = function (arrayOfChars) {
    let punctArr = [];

    while (true) {
      if (arrayOfChars[0] && arrayOfChars[0].match(punctChars)) {
        punctArr.unshift(arrayOfChars.splice(0, 1)[0]);
      } else {
        return arrayOfChars.concat(punctArr);
      }
    }
  };

  window.myFunctions = {
    ipCheck: function (str) {
      const octets = str.split('.');
      let flag = false;

      if (octets.length === 4) {
        for (let i = 0; i < octets.length; i++) {
          let octet = octets[i];
          if (octet && octet.length <= 3 && !(octet[0] === '0' && octet.length > 1) && parseInt(octet, 10) >= 0 && parseInt(octet, 10) <= 255) {
            for (let k = 0; k < octet.length; k++) {
              if (!isNaN(parseInt(octet[k], 10))) {
                flag = true;
              } else {
                flag = false;
                break;
              }
            }
            if (!flag) break;
          } else {
            flag = false;
            break;
          }
        }
      }

      return flag;
    },

    reverseWordsInSentence: function (str) {
      let words = str.split(' ');
      let result = '';

      words = words.map(function (word) {
        return word.split('').reverse();
      });

      words.forEach(function (word) {
        if (word[0]) {
          let isCapital = false;

          if (word[word.length - 1] === word[word.length - 1].toUpperCase()) {
            isCapital = true;
            word[word.length - 1] = word[word.length - 1].toLowerCase();
          }

          word = checkFirst(word);

          if (isCapital) {
            word[0] = word[0].toUpperCase();
            isCapital = false;
          }

          result = result + ' ' + word.join('');
        }
      });

      return result;
    },

    sumOfMultipleNumbers: function (num) {
      let sum3 = 0;
      let sum5 = 0;
      let sum35 = 0;

      for (let i = 3; i < num; i += 3) {
        if (i % 5 === 0) {
          continue;
        }

        sum3 += i;
      }

      for (let i = 5; i < num; i += 5) {
        sum5 += i;
      }

      return sum3 + sum5 - sum35;
    }
  }
})();