//File Chapter 9-11

//Q1
var city= prompt("Enter your city name: ");
if(city=="karachi"){
    document.write("Welcome to city of lights")
}

//Q2
var Gender= prompt("What is your gander: ");
if(Gender=="male"){
    document.write("Good Morning Sir")
}
else if(Gender=="female"){
    document.write("Good Morning Maam")
}

//Q3
var color=prompt("Enter light color: ")
if(color=="red"){
    document.write("Must Stop");
}
else if(color=="yellow"){
    document.write("Ready to move")
}
else if(color=="green"){
    document.write("Move on")
}

//Q4
var fuel =print("Enter your remaining fuel: ");
if(fuel<0.25){
    document.write("Please refill the fuel in your car");
}
else{
    document.write("carry on");
}


//Q5

//a
var a = 4;
if (++a === 5){
    alert("given condition for variable a is true");
}
//It will show allert

//b
var b =82;
if (b++ === 83){
    alert("given condition for variable b is true");
}
//it will not show any output

//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
// condition 2and 4 are true

//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
//it will show

//e
if (true){
    alert("True");
}
if (false){
    alert("False");
}
// it will show true

// F
if("car" < "cat"){
    alert("car is smaller than cat");
}
//Yes its showing output


//Q6
var maths =+prompt("Input obtained marks in Maths: ");
var english =+prompt("Input obtained marks in English: ");
var urdu =+prompt("Input obtained marks in Urdu: ");
var total =300;
var obtained =maths+english+urdu;
document.write("Total Marks: "+total+"<br>");
document.write("Marks Obtained:"+obtained+"<br>");
var percetage=((maths+english+urdu)/300)*100;
document.write("Percentage: "+percetage+"<br>");
if (percetage>=80){
    document.write("You got A-one");
}
else if(percetage>=70 && percetage<80){
    document.write("You got A");
}
else if(percetage<70 && percetage>=60){
    document.write("You got B");
}
else if(percetage<60){
    document.write("You are fail");
}

// Q7
var secret = 2;
var guess = +prompt("Guess a number from 1-10: ")
if(guess==secret){
    document.write("Bingo!")
}
else if(guess=== ++secret){
    document.write("Close enough to the correct answer")
}
else{
    document.write("wrong answer")
}

Q8
var number =+prompt("Enter a number: ");
if(number % 3 === 0){
    document.write("number is divisible by 3")
}
else{
    document.write("number is not divisible by 3")

}


//Q9
var number =+prompt("Enter a number: ");
if(number % 2 === 0){
    document.write("number is Even")
}
else{
    document.write("number is Odd")

}


//Q10
var T = +prompt("Enter temperature: ");
if(T>40){
    document.write("Its too hot out side");
}
else if(T>30 && T<40){
    document.write("The Weather today is Normal")
}
else if(T>20 && T<30){
    document.write("The Weather is cool ")
}
else if(T>10 && T<20){
    document.write("OMG! Todays weather is so cool")
}


//11
var firstno= +prompt("Enter First number: ");
var secondno= +prompt("Enter Second number: ");
var operater= prompt("What do you want to do: +,-,*,/,%");
if (operater==="+"){
    var result=firstno+secondno;
    document.write(result);
}
else if (operater==="-"){
    var result=firstno-secondno;
    document.write(result);
}
else if (operater==="*"){
    var result=firstno*secondno;
    document.write(result);
}
else if (operater==="/"){
    var result=firstno/secondno;
    document.write(result);
}
else if (operater==="%"){
    var result=firstno%secondno;
    document.write(result);
}





// File Chapter 10-14

//Chapter 10(if statement)

//Q1
var city="Karachi";
if (city = "Karachi"){
    document.write("The city of lights")
}
//statement was missing "}"


//Q2
 if(x===y){
    var a =prompt("Enter value of Z:");
 }


//Q3
var zipcode =10010;
if (zipcode==10010){
    document.write("Karachi");
}
else{
    document.write("Please write correct city");
}


//Q4
var x =10;
if (x==10){
    var x=1;
}



//Chapter 11
//Q1
var x=1,y=2;
if(x != y){
    document.write("Variables are nor equal");
}

//Q2
if(x>=y)

//Q3
var x=3;
if(x!=5){
    var x = 5;
}

//Q4
if(2 != 3){
    alert("Congratulations")
}

//Q5
var firstname= prompt("ENter your first name:");
if(firstname != "Taimoor"){
    alert("No match")
}



// CHapter 12
//Q1
var x =2,y=4;
if(x>=y){
    alert("variable X ia greather or equal to Y");
}
else{
    alert("X is smaller than Y")
}

//Q2
var maths =+prompt("Input obtained marks in Maths: ");
var english =+prompt("Input obtained marks in English: ");
var urdu =+prompt("Input obtained marks in Urdu: ");
var total =300;
var obtained =maths+english+urdu;
document.write("Total Marks: "+total+"<br>");
document.write("Marks Obtained:"+obtained+"<br>");
var percetage=((maths+english+urdu)/300)*100;
document.write("Percentage: "+percetage+"<br>");
if (percetage>=80){
    document.write("You got A-one");
}
else if(percetage>=70 && percetage<80){
    document.write("You got A");
}
else if(percetage<70 && percetage>=60){
    document.write("You got B");
}
else if(percetage<60){
    document.write("You are fail");
}

//Q3
var a=6;
if (a === 10) {
    alert("a is 10");
}
else{
    alert("The correcr value of a is"+a)
}

//Q4
var city=prompt("Enter a city");
if(city=="karachi"){
    alert("Welcome to the city of lights")
}
else if(city=="lahore"){
    alert("Welcome to Lahore")
}
else{
    alert("welcome")
}



//Chapter 13
//Q1
if(a==b && c==d)

//Q2
if(a==b || c!=d)

//Q3
if((fname=="Hamza"||fname=="Arsalan") && age<60)

//Q4
var a=2,b=3;
if(a>b){
    alert("a is greater than b");
}
else if(a<b){
    alert("a is less than b");
}

//Q5
var a="Taimoor". b="Abid"
var firstname=prompt("Enter the first name ");
var lastname=prompt("Enter the last name");
if(a==firstname&&b==lastname){
    alert("Correct")
}



// Chapter 14
//Q1
var pass="open1234";
if(pass.length>=1){
    if(pass.length <= 5){
        alert("Password must be greater than 5");
    }
    else if(pass.length> 5){
        alert("ok")
    }
}

Q2
var a = 1;
var c = "Max";
if (a === 1) { 
    if (c ==="Max") {
        alert("OK");
    }
}

//Q3
if(a===1 && c==="max"){
    alert("OK")
}

//Q4
var a=10,b=10;
if(a===b){
    if(a<=b){
        alert("Ok")
    }
}





// File Chapters 12-13

//Q1
var char = prompt("Enter a character (number or string): ");

if (char >= "A" && char <= "Z") {
  alert(char + " is an uppercase letter");
} else if (char >= "a" && char <= "z") {
  alert(char + " is a lowercase letter");
} else if (char >= "0" && char <= "9") {
  alert(char + " is a number");
} else {
  alert("Invalid input");
}

//Q2
var a=+prompt("Enter a integer");
var b=+prompt("Enter a integer");

if(a>b){
    alert("First int is greater than second");
}
else if(b>a){
    alert("First int is Smaller than second");
}
else if(a===b){
    alert("A is equal to b")
}
else{
    alert("invalid input")
}

//Q3
var num=+prompt("Enter a number (Positive/Negative/Zero:");
if (num > 0) {
    alert(num + " is a positive number");
} 
else if (num < 0) {
    alert(num + " is a negative number");
} 
else if (num === 0) {
    alert(num + " is zero");
}

//Q4
if (
    char === "a"||char === "e"||char === "i"||char === "o"||char === "u") {
    alert("True");
  } else {
    alert("False");
  }

Q5
var pass="open12345"
var userpass=prompt("Enter your password: ");
if(userpass.length==0){
     alert("Please Enter your password");
}
else if(pass===userpass){
    alert("Correct Password");
}
else{
    alert("Incorect Password")
}

//Q6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{
    greeting = "Good evening";
}

//Q7
var time=+prompt("Enter time in 24 hour format: ")

if(time>=0000 && time <1200){
    alert("Good Morning");
}
else if(time >=1200 && time< 1700){
    alert("Good Afternoon");
}
else if(time >=1700 && time< 2100){
    alert("Good evening");
}
else if(time >=2100 && time< 2359){
    alert("Good Night");
}
