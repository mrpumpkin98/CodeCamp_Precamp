// 핸드폰번호 --> 인증번호 전송 버튼 활성화

const changeFocus1 = () => {

    let phone1 =document.getElementById("ph1").value

    if(phone1.length ===3){
        document.getElementById("ph2").focus()
    }

}

const changeFocus2 = () => {

    let phone1 =document.getElementById("ph2").value

    if(phone1.length ===4){
        document.getElementById("ph3").focus()
    }

}

const changeFocus3 = function(){
    let phone1 = document.getElementById("ph1").value
    let phone2 = document.getElementById("ph2").value
    let phone3 =document.getElementById("ph3").value

    if(phone1 !== "" && phone2 !=="" && phone3 !==""){
        document.getElementById("send").disabled = false
    }else{
        document.getElementById("send").disabled = true
    }
}

// 인증번호 전송 버튼 --> 랜덤번호 전송 --> 인증완료 버튼 활성화


let isStarted = false

let greet__1=()=> {


    if(isStarted===false){
        //타이머가 작동중이 아닐떄
        isStarted =true
        document.getElementById("receive").disabled = false
        const number = Math.random()               
        const token = Math.floor(number * 1000000) 
        const paddedToken = String(token).padStart(6, "0")
    
        document.getElementById("number_6").innerText =paddedToken
        
        let time = 180
        let timer
    
        timer = setInterval(function(){
          
          if(time>=0){
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2,"0")
                document.getElementById("timer_180").innerText= min + ":" +sec
                time = time - 1
            }else{
                document.getElementById("receive").disabled = true
                isStarted = false
                clearInterval(timer)
            }
          
        },1000)

    }else{
        //타이머가 작중일때
    }


}

let greet__2=() => {
    document.getElementById("joinBox").disabled = false
} 

let greet__3=() => {

    let in1 =document.getElementById("in1").value
    let in2 =document.getElementById("in2").value
    let in3 =document.getElementById("in3").value
    let in4 =document.getElementById("in4").value

    if(!in1.includes("@")){
        alert("이메일을 다시 입력해주세요.")
        return false
    }else if(in2.length<3){
        alert("이름을 다시 입력해주세요.")
    }else if(in3.length<8){
        alert("8자 이상 입력해주세요.")
    }else if(in4.length<8){
        alert("8자 이상 입력해주세요.")
    }else{
        alert("코드 캠프 가입을 축하합니다.")
    }

}