/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { add, joinText } from './build/release.js';
var main = function () {
    var inputNum1 = document.querySelector('#InputNum_1');
    var inputNum2 = document.querySelector('#InputNum_2');
    var submitButton = document.querySelector('#Submit');
    var resultElm = document.querySelector('#Result');
    submitButton.addEventListener('click', function () {
        if (inputNum1 && inputNum2 && submitButton && resultElm) {
            var num1 = parseInt(inputNum1.value, 10);
            var num2 = parseInt(inputNum2.value, 10);
            // eslint-disable-next-line no-restricted-globals
            if (isNaN(num1) || isNaN(num2)) {
                resultElm.innerText = '数字を入力してください';
            }
            else {
                var res = add(num1, num2);
                resultElm.innerText = String(res);
            }
        }
    });
    var joinTextResultElm = document.querySelector('#JoinTextResult');
    if (joinTextResultElm) {
        joinTextResultElm.innerText = joinText('Hello', 'world!!!', ' ');
    }
};
main();
