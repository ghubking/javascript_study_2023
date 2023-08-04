//반복문 for
/*
    for(반복변수생성; 변수활용조건식; 변수증감식){
        반복문 변수 조건이 참일때 반복실행문
    }반복문 변수 조건이 거짓일때 for 끝나는 위치
*/
// 1~10까지 반복하는 반복문
//for 에서 자주 이용하는 지역변수명=i,j,m,n,k
for(let i=0; i<11; i++){
    console.log('hello js~'+(i+1))
}
//연습) 0~5 반복문
for(let i=0; i<6; i++){
    console.log('컴온'+i)
}
// 5~0 반복문
for(let i=5; i>=0; i--){
    console.log('어서옵쇼'+i)
}
// 10~30 반복문 + 10~30중 홀수만 반복출력
for(let i=10; i<31; i++){
    if(i%2===1){
    console.log('집에가'+i)
}}
//DOM, 배열 사용하는 반복문
const study = ['html', 'css','javascript', 'figma','photoshop','illustrator']
// console.log(study[0])
// console.log(study[1])
// console.log(study[2])

// 객체의 수 length 속성  --> length는 1부터 시작하므로 i<=study.length를 쓰면 마지막에 undefined가 나옴.
// 1. html 공부
// 2. css 공부
// 3. javascript 공부
// 4. photoshop 공부
// 5. illustrator 공부
for(let i=0; i<study.length; i++){   
    console.log(`${i+1}. ${study[i]} 공부`)
}
console.log('------------------------')
//위 study 배열을 역순으로 출력하기
for(let i=study.length-1; i>=0; i--){
    console.log(`${i+1}. ${study[i]} 공부`)
}

//반복문 연습
const coffee = new Array('아메리카노','카페라떼','녹차라떼')
//반복문 이용 coffee배열 모두 출력
for(let i=0; i<coffee.length; i++){
    console.log(coffee[i])
}