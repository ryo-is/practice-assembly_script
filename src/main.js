// eslint-disable-next-line import/extensions
import { add } from './build/release.js';
var main = function () {
    console.log('main');
    document.body.innerText = String(add(4, 2));
};
main();
