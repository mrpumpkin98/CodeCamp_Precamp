email.includes("@")
// true
email.split("@")
// (2) ['codecamp', 'gmail.com']
email.split("@")[0]
// 'codecamp'
email.split("@")[1]
// 'gmail.com'
let userMail = email.split("@")[0]
// undefined
userMail
// 'codecamp'
let company = email.split("@") [1]
// undefined
company
// 'gmail.com'
let maskingMail =[]
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[3])
// 3
maskingMail.push(userMail[4])
// 4
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'e', 'c', '*', '*', '*', '*']0: "c"1: "o"2: "e"3: "c"4: "*"5: "*"6: "*"7: "*"length: 8[[Prototype]]: Array(0)
maskingMail.join("")
// 'coec****'
maskingMail.join("")+"@"+company
// 'coec****@gmail.com'
let result = maskingMail.join("")+"@"+company
// undefined
result
// 'coec****@gmail.com'