

let greet_1=()=> {

    let isStarted = false


    if(isStarted===false){
        //타이머가 작동중이 아닐떄
        isStarted =true
        document.getElementById("target_btn").disabled = false
        const number = Math.random()               
        const token = Math.floor(number * 1000000) 
        const paddedToken = String(token).padStart(6, "0")
    
        document.getElementById("numb").innerText =paddedToken
        document.getElementById("numb").style.color ="#"+ paddedToken
        
        let time = 10
        let timer
    
        timer = setInterval(function(){
          
          if(time>=0){
                let min = Math.floor(time/60)
                let sec = String(time%60).padStart(2,"0")
                document.getElementById("times").innerText= min + ":" +sec
                time = time - 1
            }else{
                document.getElementById("target_btn").disabled = true
                isStarted = false
                clearInterval(timer)
            }
          
        },1000)

    }else{
        //타이머가 작중일때
    }


}



