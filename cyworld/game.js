const startWord = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText

    let lastword = word[word.length-1]
    let firstword = myword[0]

    if(lastword===firstword){
        document.getElementById("result").innerText = "정답입니다!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    }else if(lastword!==firstword){
        document.getElementById("result").innerText ="땡!"
        document.getElementById("myword").value = ""
    }else{
        document.getElementById("result").innerText +"오류입니다."
    }
    
}

const startLotto = () =>{
    var arr = [];
for(let i=0; i<6; i+=1){
  var randoms = Math.floor(Math.random()*10)+1;
  arr.push(randoms);
}

document.getElementById("no-1").innerText =arr[0]
document.getElementById("no-2").innerText =arr[1]
document.getElementById("no-3").innerText =arr[2]
document.getElementById("no-4").innerText =arr[3]
document.getElementById("no-5").innerText =arr[4]
document.getElementById("no-6").innerText =arr[5]

}
