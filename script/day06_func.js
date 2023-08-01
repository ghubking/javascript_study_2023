//함수 = 재사용문법
//DOM.addEventListener('이벤트',function(){실행결과})
//기본문법(아래)
//function 함수명() {재사용문법}
//자판기 함수 : 무조건 콜라1개가 나오는 자판기
//함수는 생성, 호출을 개별로 진행해야 한다.
function japangi(){
    console.log('콜라 1개 나왔습니다')
}
japangi()  //호출(생성된 함수명 작성)
japangi()
japangi()
japangi() //계속해서 재사용 가능
const orderBtn = document.querySelector('#order')
console.log(orderBtn)
// DOM 이벤트로 함수 호출 시 함수명만 작성한다.(괄호없이)
//orderBtn.addEventListener('click',japangi)  -->이벤트 바로옆에 호출함수 쓸때는 괄호없이, 그외에는 괄호포함
orderBtn.addEventListener('click',function(){
    console.log('1000원 입금')
    japangi()     // 함수 호출 따로 쓸때는 괄호 넣어서 써야함.
})

//함수 = 재사용되는 js문법을 감싸서 쉽게 호출하는 기능
//매개변수 = 재사용 함수 내에 변경되는 데이터가 있을 경우
//매개변수 활용한 함수 기본문법
//function 생성함수명(생성매개변수명){재사용문법}
function japangi2(drink){
    console.log(drink+' 1개 나왔습니다')
}
//매개변수가 있는 함수를 호출할 경우
//호출함수 괄호안에는 매개변수에 삽입할 데이터를 작성한다.
japangi2('사이다')
japangi2('콜라')
// 1.생성(drink) -> 2.준비:재사용문법(console.log)
//3.drink에 대입:japangi2('사이다')  --> 4. 화면전달: drink('사이다')+1개 나왔습니다

//연습) 사이다1개 나왔습니다. 콜라2개 나왔습니다. 사이다3개 나왔습니다.
//function 함수명(매개변수,매개변수) {}
function japangi3(drink, ea){
    console.log(drink+ea+'개 나왔습니다')
}
japangi3('사이다 ',1)
japangi3('콜라 ',2)
japangi3('사이다 ',3)
//--------------------------------
//4주 자유적금 통장
//연습)초기금액 = 10,000원,  함수호출메세지: ?원 입금했습니다. 총 잔액은 ?원 입니다.
let passBook = 10000
function week4Passbook(money){
    passBook += money
    console.log(`${money}원 입금했습니다. 총 잔액은 ${passBook}원 입니다`)
}    //콘솔로그 총잔액에 passbook + money를 적용하면, 1회성이고 누적 적용이 안됨.
week4Passbook(1000)
week4Passbook(1000)
week4Passbook(1000)
week4Passbook(5000)
// 구구단 2단 ~ 9단 함수 제작하기
function dan99(num){
    console.log(`${num}x1=${num*1}`)    
    console.log(`${num}x2=${num*2}`)    
    console.log(`${num}x3=${num*3}`)    
    console.log(`${num}x4=${num*4}`)    
    console.log(`${num}x5=${num*5}`)    
    console.log(`${num}x6=${num*6}`)    
    console.log(`${num}x7=${num*7}`)    
    console.log(`${num}x8=${num*8}`)    
    console.log(`${num}x9=${num*9}`)
    console.log('-------------------')    
}
dan99(8)
dan99(2587412)