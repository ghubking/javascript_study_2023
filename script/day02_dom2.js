// getElement..방법
const mainTag = document.getElementsByTagName('main')[0];
const hTag = document.getElementsByTagName('h1');
const contentsCls = document.getElementsByClassName('contents');
const boxId = document.getElementById('box');
const aTag = document.getElementsByTagName('a');
const a_first = document.getElementsByClassName('first');
console.log(mainTag, hTag[0],contentsCls[0],boxId,a_first);
console.log(aTag, aTag[0], aTag[1], aTag[2])
// [ES6] querySelector..방법
const mainTagQ = document.querySelector('main');
const hTagQ = document.querySelector('h1');
const contentsClsQ = document.querySelector('.contents');
const boxIdQ = document.querySelector('#box');
const aTagQ = document.querySelectorAll('a'); //여러개의경우 쿼리셀렉터에 All을 붙여야 함.
const a_firstQ = document.querySelector;('.first');
console.log(mainTagQ, hTagQ, contentsClsQ, boxIdQ, a_firstQ);
console.log(aTagQ, aTagQ[0], aTagQ[1], aTagQ[2]);
// querySelector, querySelectorAll
// 객체가 2개이상일때 태그 작성 순서상 한개만 인식하고 싶다면 querySelector(dom)
// 객체가 2개이상일때 모두 잡아서 구분해서 사용하고 싶다면 querySelectorAll(dom)[index]