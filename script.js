/*
zadanie 1 - "kalkulator"
*/

var a = 20;
var b = 10;

var add = a+b;
var sub = a-b;
var mul = a*b;
var div = a/b;
var mod = a%b;

// a)

console.log(add);
console.log(" wynik to:" + sub);

// b)

document.getElementById("addR").innerHTML = add;
document.getElementById("subR").innerHTML = " wynik odejmowania " + a+" i "+ b +
" to: " + sub;
document.getElementById("mulR").innerHTML = " wynik mnożenia " + a + " i " + b +" to: " +mul ;

document.getElementById("divR").innerHTML = " wynik dżiałania " + a+ " i "+b+" to: " +div;
document.getElementById("modR").innerHTML = " wynik modulowania " + a+ " i "+b+" to: " +mod;

/*
//Zadanie 2 - pole
*/

let s1 = 3;
let s2 = 4;
let s3 = 5;
// powinno wyjść 6

let p = (s1+s2+s3)/2;
let area = Math.sqrt(p*(p-s1)*(p-s2)*(p-s3));

// a)
console.log(area)
document.getElementById("trk").innerHTML = " wynikiem obliczający pole trójkąta o danych bokach to: "
 + area;

// b) wynik + wyjaśnienia

/*
Zadanie 3 - losowanie liczb
*/

// gnum = Math.ceil(Math.random()*10);
// console.log(gnum);
// let num = prompt("podaj liczbę: ");

// if(gnum == num){
//     console.log("dobra robota! ");
// }else{
//     console.log("sprobuj ponownie");
// }

/*
Zadanie 4
*/

let num1 = parseFloat(prompt("podaj pierwszą liczbę: "));
let num2 = parseFloat(prompt("podaj drugą liczbę: "));
let num3 = parseFloat(prompt("podaj trzecią liczbę: "));

if(num1==num2 && num2==num3){
    console.log("liczbt są równe");
}else {
    if(num1>=num2 && num1>=num3){
    console.log("najwieksza jest pierwsza liczba: " + num1);
}else if(num2>=num1 && num2>=num3){
    console.log("najwieksza jest druga liczba: " + num2);
}else if(num3>=num1 && num3>=num2){
    console.log("najwieksza jest trzecia liczba: " + num3);

}}
