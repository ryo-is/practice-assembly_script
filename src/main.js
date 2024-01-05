/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { add, joinText } from './build/release.js';
var main = function () {
    var addResultElm = document.querySelector('#AddResult');
    if (addResultElm) {
        addResultElm.innerText = String(add(4, 2));
    }
    var joinTextResultElm = document.querySelector('#JoinTextResult');
    if (joinTextResultElm) {
        joinTextResultElm.innerText = joinText('Hello', 'world!!!', ' ');
    }
};
main();
