/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { add, joinText } from './build/release.js';

const main = (): void => {
  const inputNum1 = document.querySelector('#InputNum_1') as HTMLInputElement;
  const inputNum2 = document.querySelector('#InputNum_2') as HTMLInputElement;
  const submitButton = document.querySelector('#Submit') as HTMLButtonElement;
  const resultElm = document.querySelector('#Result') as HTMLElement;

  submitButton.addEventListener('click', () => {
    if (inputNum1 && inputNum2 && submitButton && resultElm) {
      const num1 = parseInt(inputNum1.value, 10);
      const num2 = parseInt(inputNum2.value, 10);
      // eslint-disable-next-line no-restricted-globals
      if (isNaN(num1) || isNaN(num2)) {
        resultElm.innerText = '数字を入力してください';
      } else {
        const res = add(num1, num2);
        resultElm.innerText = String(res);
      }
    }
  });

  const joinTextResultElm = document.querySelector(
    '#JoinTextResult',
  ) as HTMLDivElement;
  if (joinTextResultElm) {
    joinTextResultElm.innerText = joinText({
      str1: 'Hello',
      str2: 'world!!!',
      separator: ' ',
    });
  }
};

main();
