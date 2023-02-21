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
        document.getElementById("send").style ="background-color:#0068FF; color: #FFFFFF; border: 1px solid #0068FF ;cursor: pointer;"
    }else{
        document.getElementById("send").disabled = true
    }
}

// 인증번호 전송 버튼 --> 랜덤번호 전송 --> 인증완료 버튼 활성화


let isStarted = false;

let greet__1=()=> {


    // if(isStarted===false){
    //     //타이머가 작동중이 아닐떄
    //     isStarted =true
    //     document.getElementById("receive").disabled = false
    //     const number = Math.random()               
    //     const token = Math.floor(number * 1000000) 
    //     const paddedToken = String(token).padStart(6, "0")
    
    //     document.getElementById("number_6").innerText =paddedToken
        
    //     let time = 180
    //     let timer
    
    //     timer = setInterval(function(){
          
    //       if(time>=0){
    //             let min = Math.floor(time/60)
    //             let sec = String(time%60).padStart(2,"0")
    //             document.getElementById("timer_180").innerText= min + ":" +sec
    //             time = time - 1
    //         }else{
    //             document.getElementById("receive").disabled = true
    //             isStarted = false
    //             clearInterval(timer)
    //         }
          
    //     },1000)

    // }else{
    //     //타이머가 작중일때
    // }

    const token = String(Math.floor(Math.random() * 1000000)).padStart(6, "0")
    document.getElementById("number_6").innerText = token
    document.getElementById("send").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("send").setAttribute("disabled", "true") // 인증전송을 눌렀으니 사용을 못하게막음
    document.getElementById("receive").style="background-color: #0068FF; color: #FFFFFF; cursor: pointer;"
    document.getElementById("receive").removeAttribute("disabled") // 인증선송을 눌을니 인증확인 기본값인 비사용을 제거
    getTokenTimer() //외부 기능을 가져올 수 있음

}

let interval;

function getTokenTimer(){
    let timer = 180
    interval = setInterval(() => {
        if(timer >= 0){
            const minutes = Math.floor(timer / 60)
            const seconds = timer % 60

            document.getElementById("timer_180").innerText = minutes + ":" + String(seconds).padStart(2, "0")
            timer -= 1
        } else {
            document.getElementById("number_6").innerText = "000000"
            document.getElementById("send").style = ""
            document.getElementById("send").setAttribute("disabled", "true")
            
            document.getElementById("timer_180").innerText = "3:00"
            document.getElementById("receive").style = ""
            document.getElementById("receive").setAttribute("disabled", "true")
            
            clearInterval(interval)
        }
    }, 1000)
}




function greet__2(){
    clearInterval(interval) // 시간 초기화
    document.getElementById("receive").style = "background-color: #FFFFFF; cursor: default;"
    document.getElementById("receive").setAttribute("disabled", "true")
    document.getElementById("receive").innerText = "인증완료"
    alert("인증이 완료되었습니다.")

    document.getElementById("joinBox").style = "background-color: #0068FF; color: #ffffff; border: 1px solid #0068FF ;cursor: pointer;"
    document.getElementById("joinBox").removeAttribute("disabled")
}

let greet__3=() => {

    let in1 =document.getElementById("in1").value
    let in2 =document.getElementById("in2").value
    let in3 =document.getElementById("in3").value
    let in4 =document.getElementById("in4").value

    if(!in1.includes("@")){
        document.getElementById("fail_1").innerText ="이메일이 올바르지 않습니다."
        document.getElementById("fail_2").innerText =""
        document.getElementById("fail_3").innerText =""
        document.getElementById("fail_4").innerText =""
        document.getElementById("in1").value = ""
        return false
    }else if(in2.length<3){
        document.getElementById("fail_2").innerText ="이름이 올바르지 않습니다."
        document.getElementById("fail_1").innerText =""
        document.getElementById("fail_3").innerText =""
        document.getElementById("fail_4").innerText =""
        document.getElementById("in2").value = ""
    }else if(in3.length<8){
        document.getElementById("fail_3").innerText ="비밀번호를 입력해 주세요."
        document.getElementById("fail_1").innerText =""
        document.getElementById("fail_2").innerText =""
        document.getElementById("fail_4").innerText =""
        document.getElementById("in3").value = ""
    }else if(in4!==in3){
        document.getElementById("fail_4").innerText ="비밀번호를 입력해 주세요."
        document.getElementById("fail_1").innerText =""
        document.getElementById("fail_2").innerText =""
        document.getElementById("fail_3").innerText =""
        document.getElementById("in4").value = ""
    }else{
        document.getElementById("fail_1").innerText =""
        document.getElementById("fail_2").innerText =""
        document.getElementById("fail_3").innerText =""
        document.getElementById("fail_4").innerText =""
        alert("코드 캠프 가입을 축하합니다.")
    }

}


