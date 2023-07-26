// dom == document object model
// 자바스크립트 = 객체지향언어
// bom == browser object model 웹브라우저의 기본 객체
//let hello = 'hello js';
//window.alert(hello); // alert 팝업창 띄우기
//let qa = window.prompt('1+1?');
//window.alert('정답은 '+qa+'입니다.')
//let ox = window.confirm('자바스크립트는 객체지향언어이다.');//확인=true(참), 취소=false(거짓)
//window.alert(ox);


//객체.속성
//객체.메소드()
//객체.속성.메소드()

//아이디 객체 변수 대입하기
//변수선언키워드 변수명 대입연산자 대입객체문법
const btn1 = document.getElementById('btn1');
console.log(btn1);
btn1.style.color = 'red';
const login = document.getElementById('login');
console.log(login);
login.style.borderRadius = '50%';
login.style.fontSize = '2rem';

// 클래스 객체 변수 생성하기
const li_first = document.getElementsByClassName('first'); //클래스네임은 여러개 사용가능하기때문에, 겟엘리먼트s바이클래스네임이라 적는다.
const li_second = document.getElementsByClassName('second')
const li_last = document.getElementsByClassName('last')
console.log(li_first,li_second,li_last);
console.log(li_first[0])
console.log(li_first[1])
li_first[1].style.color = 'red';
li_first[0].style.fontSize = '2rem';

//태그 객체 변수 생성하기
const header = document.getElementsByTagName('header');
const header_h1 = document.getElementsByTagName('h1');
const nav = document.getElementsByTagName('nav');
const nav_a = document.getElementsByTagName('a');
console.log(header,header_h1,nav,nav_a);
console.log(nav_a[2]);
nav_a[2].style.fontWeight = '1000'

//innerHTML 속성 활용
//객체.속성 //읽기
//객체.속성 = 대입값 //수정or삭제
console.log(header.innerHTML); //undefined
console.log(header[0].innerHTML); //자식, 자손 읽기 
console.log(header_h1[0].innerHTML);  
console.log(nav[0].innerHTML);  
console.log(li_first[1].innerHTML);
console.log(btn1.innerHTML);
console.log(li_last[0].innerHTML);
console.log(pay.innerHTML);

header_h1[0].innerHTML = '로<br>고';
login.innerHTML = 'LOGIN';
nav_a[1].innerHTML = ''; //빈문자열-->문자열 삭제
nav_a[0].style.backgroundColor = 'aqua';
nav_a[0].style.border = '2px solid black';
nav_a[0].style.borderRadius = '50%';
nav_a[0].style.margin = '50px 50px';
nav_a[2].style.transform = 'rotate(10deg)';