// 데이터 타입, 연산자 실습

1+1
// 2
1+"1"
// '11'
1-"1"
// 0
10-"1"
// 9
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
true || false
// true
!false
// true
!true
// false


//조건문 실습 1

if(1+1 ===2){
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다.")
}
// VM807:2 정답입니다.
undefined
if(true){
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다.")
}
// VM859:2 정답입니다.
undefined
if(false){
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다.")
}
// VM887:4 틀렸습니다.
undefined
if(0){
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다.")
}
// VM905:4 틀렸습니다.
undefined
if(1){
    console.log("정답입니다.")
}else{
    console.log("틀렸습니다.")
}
// VM915:2 정답입니다.

//조건문 실습 2

const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
  }
  
  if(profile.age>=20){
     console.log("성인입니다.")
  }else if(profile.age>=8){
    console.log("학생입니다.")
  }else if(profile.age>0){
    console.log("어린이입니다.")
  }else{
    console.log("잘못 입력하셨습니다.")
  }
  

  
  if(profile.age>=20){
     console.log("성인입니다.")
  }else if(profile.age<=19&&profile.age>=8){
    console.log("학생입니다.")
  }else{
    console.log("어린이입니다.")
  }