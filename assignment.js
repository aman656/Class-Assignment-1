//                                           QUESTION 1

// var total = +prompt("Enter total marks:")
// var first = +prompt("ENter marks of first subject:")
// var second = +prompt("Enter marks of second subject:")
// var third = +prompt("Enter marks of third subject:")


// document.getElementById('one').innerHTML = total;
// var obtained = first + second + third ;
// document.getElementById('two').innerHTML = obtained
// var per = (Math.round(obtained*100)/total)
// document.getElementById('thr').innerHTML = per
// if(per>85){
//     document.getElementById('fou').innerHTML = 'Grade A-one'
//     document.getElementById('fiv').innerHTML = 'Excellent'
// }
// else if(per>75){
//     document.getElementById('fou').innerHTML = 'Grade A '
//     document.getElementById('fiv').innerHTML = 'Good'
// }
// else if(per>60){
//     document.getElementById('fou').innerHTML = 'Grade B'
//     document.getElementById('fiv').innerHTML = 'You need to improve'
// }

//                                                     QUESTTION 2


// var a = 5
// var b = +prompt("Guess the number:Hint it ranges from 1 to 10!")
// if(b==a){
//     document.getElementById('gue').innerHTML = 'Bingo! Correct Answer'
// }
// else if(b==(a+1)){
//     document.getElementById('gue').innerHTML = 'CLose Enough to the correct answer.'
//     document.getElementById('mess').innerHTML = 'If you want to try again refresh the page '

// }

//                                                  QUESTION 3

// var a = +prompt("Enter the temperature:")
// if(a>40){
//     document.getElementById('gue').innerHTML = 'It"s too hot outside'
// }
// else if(a>30){
//     document.getElementById('gue').innerHTML = 'The weather today is normal'

// }
// else if(a>20){
//     document.getElementById('gue').innerHTML = 'Today"S weather is cool'
// }
// else if(a>10){
//     document.getElementById('gue').innerHTML = 'OMG! Today"s weather is so cool'
// }

//                                                QUESTION 4

// var a = +prompt("ENTER first number")
// var b = +prompt("Enter secon number")

// var ope = prompt("Choose the one from the following + - *  /")
// var result
// if(ope=="+"){
//     result = a+b
//     document.getElementById('gue').innerHTML = result
// }
// else if(ope=="-"){
//     result = a-b
//     document.getElementById('gue').innerHTML = result
// }
// else if(ope =="*"){
//     result = a*b
//     document.getElementById('gue').innerHTML = result
// }
// else if(ope=="/"){
//     result = a/b
//     document.getElementById('gue').innerHTML = result
// }


//                                  QUESTION 5

// var pass  = 'seen452'
// var userpass = prompt("PLEASE ENTER YOUR PASSWORD!")
// if(userpass ==pass){
//     document.getElementById('gue').innerHTML = "The password you entered matches the original password."
// }
// else if(userpass==""){
//     document.getElementById('mess').innerHTML = "Please enter you password"
// }
// else{
//     document.getElementById('gue').innerHTML = "Incorresct Password"
// }

//      


//                                    QUESTion 6

// var a = +prompt("Enter the number whose table to be printed:")
// var b = +prompt("ENter the range till table has to be printed")

// for(var i = 1;i<b+1;i++){
//     document.write("a  * i = ",a*i,'<br>')
// }