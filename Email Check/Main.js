function check()
{
let mail = document.getElementById("mail").value

let com = mail.substring(mail.length , mail.length -4)
let firt = mail.substring(mail.length - mail.length , mail.length - mail.length + 1)
let arob = mail.indexOf("@")

let firtName = mail.substring( 1 , arob) // nome of mail
let lastName = mail.substring(arob + 1, mail.length - 4 )

let firtVal = /[qwertyuiopplkjhgfdsazxcvbnm1234567890]/
let lastVal = /[qwertyuiopasdfghjklzxcvbnm]/
console.log(firt + firtName + "@"+ lastName + com)
if(lastVal.test(firt) == true  && firtVal.test(firtName) == true  && lastVal.test(lastName) == true  && com == ".com" ){
  document.getElementById("result").innerText = "Valid Email"

}else
{
  document.getElementById("result").innerText = "Insert a Valid Email"
}
}