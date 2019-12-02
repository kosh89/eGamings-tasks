const ipCheck = function (str) {
  const template = /^(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\.(0|[1-9][0-9]?|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
  return template.test(str);
}

console.log('=== valid ip ===');
console.log(ipCheck('1.2.3.4'));
console.log(ipCheck('123.45.67.89'));
console.log(ipCheck('127.0.0.1'));

console.log('=== invalid ip ===');
console.log(ipCheck('1.2.3'));
console.log(ipCheck('1.2.3.4.5'));
console.log(ipCheck('123.456.78.90'));
console.log(ipCheck('123.045.067.089'));
console.log(ipCheck('123.00.67.89'));