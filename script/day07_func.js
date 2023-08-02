//함수 생성 > 호출
//함수 생성 후 호출식을 작성하지 않으면 함수결과를 볼 수 없다.
//1. 생성 : function 함수명(매개변수명){재사용함수문법}
//2. 호출 : 함수명()
function func1(srt){//접속 회원 맞춤형 인사 함수생성
    console.log(`${srt}님 어서오세요!`)
}// 생성함수 end
func1('홍길동')
func1('abc1234')  //호출
//---------------------------------------------------------
//함수 기능 : 리턴(return) 함수결과 값 외부로 반환 명령
function func2(a){
    return a+1 //리턴활용 함수 결과값만 외부로 반환
}
func2(50) //함수 결과값을 출력하는 메서드가 없어 출력X
console.log(func2((50)))//함수결과를 호출앞 메서드에 의해 출력O
//window.alert(func2((100)))
document.write(func2(10))
//-----------------------------------------------------------
function func3(a, b){
    return a*b // 함수 내 return 은 한개만 존재해야 함.
}
console.log(func3(10,20))
console.log(func3(2,3))
//-----------------------------------------------------------
let total = 0
function func4(a){
    total = a
    total++
    return total
    total++  //return 뒤에 있는 js는 실행하지 못한다.
}
console.log(func4(10)) //11
//-------------------------------------------------------------
let num1 = 10
let num2 = 20
function func5(a,b){
    num1 += num2 //복합대입(기존값에 추가대입해라) 30
    num2 = a+b   //그냥대입(기존값 버리고 대입)6
    num1 += num2 //복합대입 36
    return num1  //36
}
console.log(func5(2,4)) //36
//------------------------------------------------
const txtInput = document.querySelectorAll('.box .txt')
console.log(txtInput)
txtInput[0].addEventListener('focus',function(){
    bg(txtInput[0], 'yellow')   //아래 함수를 리턴했으므로 호출값만 써주면 됨.
})
txtInput[1].addEventListener('focus',function(){
    bg(txtInput[1], 'blue')
})
txtInput[2].addEventListener('focus',function(){
    bg(txtInput[2], 'pink')
})
//함수 = 반복되는 재사용 문법, 매개변수=재사용문법 내 수정데이터
function bg(target, color){
    return target.style.backgroundColor = color
}
//---------------------------------------------------------
//관심상품, 알림설정 이미지에 마우스를 올렸을 때
//off --> on 이미지 변경
//마우스를 나갔을때 on --> off 이미지 변경
const likeImg = document.querySelector('.product .like img')
const ideaImg = document.querySelector('.product .idea img')
console.log(likeImg, ideaImg)
likeImg.addEventListener('mouseover',function(){
    //likeImg.src = './images/heart_on.png'
    onoff(likeImg, 'heart', 'on')
})
likeImg.addEventListener('mouseout',function(){
    //likeImg.src = './images/heart_off.png'
    onoff(likeImg, 'heart', 'off')
})
ideaImg.addEventListener('mouseover',function(){
    //ideaImg.src = './images/idea_on.png'
    onoff(this, 'idea', 'on')   // 타겟이름대신 this를 써도 됨.
})
ideaImg.addEventListener('mouseout',function(){
    //ideaImg.src = './images/idea_off.png'
    onoff(this, 'idea', 'off')   // 타겟이름대신 this를 써도 됨.
})
function onoff(target, name, status){
    return target.src = `images/${name}_${status}.png`
}
