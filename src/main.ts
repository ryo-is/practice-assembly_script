/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { add, joinText } from './build/release.js';

const main = (): void => {
  const addResultElm = document.querySelector('#AddResult') as HTMLDivElement;
  if (addResultElm) {
    addResultElm.innerText = String(add(4, 2));
  }

  const joinTextResultElm = document.querySelector(
    '#JoinTextResult',
  ) as HTMLDivElement;
  if (joinTextResultElm) {
    joinTextResultElm.innerText = joinText('Hello', 'world!!!', ' ');
  }
};

main();
