(function () {
  const reverseWordsBtn = document.querySelector('#reverseWordsBtn');
  const ipCheckBtn = document.querySelector('#ipCheckBtn');
  const sumOfNumbersBtn = document.querySelector('#sumOfNumbersBtn');
  const console = document.querySelector('.console');

  const readParam = function () {
    return document.querySelector('#param').value;
  }

  reverseWordsBtn.addEventListener('click', function () {
    const param = readParam();
    console.textContent = window.myFunctions.reverseWordsInSentence(param);
  });

  ipCheckBtn.addEventListener('click', function () {
    const param = readParam();
    console.textContent = window.myFunctions.ipCheck(param);
  });

  sumOfNumbersBtn.addEventListener('click', function () {
    const param = readParam();
    console.textContent = window.myFunctions.sumOfMultipleNumbers(param);
  });

})();