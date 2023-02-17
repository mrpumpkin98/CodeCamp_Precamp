const changeFocus1 = () => {

    let phone1 =document.getElementById("p1").value
    if(phone1.length ===3){
        document.getElementById("p2").focus()
    }

}

const changeFocus2 = () => {

    let phone1 =document.getElementById("p2").value
    if(phone1.length ===4){
        document.getElementById("p3").focus()
    }

}

const changeFocus3 = function(){
    let phone1 = document.getElementById("p1").value
    let phone2 = document.getElementById("p2").value
    let phone3 =document.getElementById("p3").value

    if(phone1 !== "" && phone2 !=="" && phone3 !==""){
        document.getElementById("to").disabled = false
    }else{
        document.getElementById("to").disabled = true
    }
}

// const changeFocus3 = () => {

//     let phone1 = document.getElementById("p1").value
//     let phone2 = document.getElementById("p2").value
//     let phone3 =document.getElementById("p3").value


//     if(phone1&& phone2&& phone3){
//         document.getElementById("to").disabled = false
//     }else{
//         document.getElementById("to").disabled = true
//     }

// }

// const changeFocus3 = () => {

//     let phone1 = document.getElementById("p1").value
//     let phone2 = document.getElementById("p2").value
//     let phone3 =document.getElementById("p3").value

    
    
//     if(phone1.length ===3){
//         document.getElementById("p2").focus()
//     }

//     if(phone2.length ===4){
//         document.getElementById("p3").focus()
//     }

//     if(phone1&& phone2&& phone3){
//         document.getElementById("to").disabled = false
//     }else{
//         document.getElementById("to").disabled = true
//     }
  
// }
