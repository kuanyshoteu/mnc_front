
data = [
    ["imgPost1", "imgAuthor", "nameAuthor", "text"],
    ["imgPost2", "imgAuthor2", "nameAuthor", "text"],
    ["imgPost3", "imgAuthor2", "nameAuthor", "text"],
    ["imgPost4", "imgAuthor", "nameAuthor", "text"],
]

demo = document.getElementById("demo")

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
document.getElementById("demo").innerHTML=
"My car is " + myCar.age(year) + " years old.";





var card = {
  title:"Free",
  description:"For broke people",
  price:5000
}; 
//var x = card; // < --- Ссылка на объект
//firstObject()
//deleteSmth()
// objectInObject()
function firstObject(){
    let txt = "";
    for (let i in card) {
      txt += card[i] + " ";
    }
    demo.innerHTML = txt;
}
function deleteSmth(){
    delete card['description']
    let txt = "";
    for (let x in card) {
      txt += card[x] + " ";
    }    
    demo.innerHTML = txt;
}
function objectInObject(){
    var card = {
      title:"Free",
      description:"For broke people",
      price:5000,
      Access: [
      {
        OpenSite: true,
        Create: false,
        Yo: {Qw: 'erty'}
      },
      {
        OpenSite: true,
        Create: false,
        Yo: [{Qw: 'erty'}],
      },
      ]
    }; 
    let txt = "";
    for (let x in card) {
      txt += card[x] + " ";
    }
    demo.innerHTML = txt;
}
// useThis()
function useThis(){
    var card = {
      title:"Free",
      description:"For broke people",
      price:5001,
      fullText: function() {
        return this.title + " " + this.description + this.price;
      }
    }; 
    txt = card.fullText()
    demo.innerHTML = txt;
}

fillCards()
function fillCards(){
    origCard = document.getElementById("origCard")
    cardBox = document.getElementById("cardBox")
    for(var i = 0; i < data.length; i ++){
        cloneCard = origCard.cloneNode(true)
        cardTitle = cloneCard.getElementsByClassName("cardTitle")[0]
        cardTitle.innerHTML = data[i]
        cardBox.appendChild(cloneCard)
    }
}



function colorKvadrat(){
    // 1. Откроет html документ
    // 2. Найти нужный див по классу
    var kvadrat = document.getElementsByClassName("kvadrat")[0]
    // console.log(kvadrat)
    // 3. Поменять background-color
    kvadrat.style.backgroundColor = "blue"
}

var kvadrat = document.getElementsByClassName("kvadrat")[0]
var leftt = 0
var topp = 0
function moveKvadrat(){
    moveRight()
}
function moveRight(){
    leftt += 30
    kvadrat.style.left = leftt + "px"
    if (leftt <= 900){
        setTimeout(moveRight, 20)  // <-- Ждет 20 милисекунд и только потом запускает себя заново
    }
    else{
        moveDown()
    }
}
function moveDown(){
    topp += 30
    kvadrat.style.top = topp + "px"
    if (topp <= 400){
        setTimeout(moveDown, 20)  // <-- Ждет 20 милисекунд и только потом запускает себя заново
    }
    else{
        moveLeft()
    }
}
function moveLeft(){
    leftt -= 30
    kvadrat.style.left = leftt + "px"
    if (leftt >= 0){
        setTimeout(moveLeft, 20)  // <-- Ждет 20 милисекунд и только потом запускает себя заново
    }
    else{
        moveUp()
    }
}
function moveUp(){
    topp -= 30
    kvadrat.style.top = topp + "px"
    if (topp >= 100){
        setTimeout(moveUp, 20)  // <-- Ждет 20 милисекунд и только потом запускает себя заново
    }
}



function solve(){
    // 1. Откроет html документ
    console.log(document)
    // 2. Найти нужный див
    nuznyiDiv = document.getElementById("answer")
    console.log(nuznyiDiv)
    // 3. В этом диве поменять текст
    nuznyiDiv.innerHTML = "Works"
}


function krutaiaFunkcia(a, x){
    for(var i = 1; i <= 100; i++){
        if(i % 7 == 0 && i % 3 != 0){
            console.log(i)
        }
        else{
            console.log("Не подходит", i)
        }
        // Не совсем корректный способ
        // if(i % 7 == 0){
        //     if(i % 3 != 0){
        //         console.log(i)
        //     }
        // }
    }
}
