//변수생성
const btn3 = document.querySelector('#btn3');
const btn4 = document.querySelector('#btn4');
const btn5 = document.querySelector('#btn5');
const input_id = document.querySelector('#user_id');
console.log(btn3, btn4, btn5, input_id); //정상확인

//2. 이벤트 작성
//btn3 클릭했을 때 경고창 띄우기
//객체.이벤트리스너('이벤트종류',함수(){실행결과})
btn3.addEventListener('click',function(){
    window.alert('error');
})
btn4.addEventListener('mouseover',function(){
    this.style.backgroundColor = 'aqua'; //마우스를 올렸을때 아쿠아색으로변환
    //this 현재 이벤트 객체 대상 == bnt4
    //현재대상.style.css속성 = '대입값'
});
btn5.addEventListener('click',function(){ 
    btn4.style.transform = 'skew(10deg)'; //btn5를 눌렀을때,btn4의 기울기가 10도변경
    btn3.style.backgroundColor = 'yellow'; //btn3 색이 노랑으로 변경
    btn2.innerHTML = '결과';               // btn2 텍스트가 결과로 변경
})
input_id.addEventListener('focus',function(){ //인풋에는 마우스오버가 아닌 포커스를 써야함.
    this.style.backgroundColor = 'lime'; //인풋창에 커서를 올렸을때 라임색으로 변경
})
input_id.addEventListener('blur',function(){ //포커스 반대개념(마우스가 빠졌을때)
    this.style.backgroundColor = 'gray';  //그레이 색으로 변경
})
//변수.addEventListener('이벤트',function(){실행결과});

