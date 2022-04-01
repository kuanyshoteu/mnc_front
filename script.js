data1 = ["Free", "Standard", "Premium"]
// Это данные
data2 = [
    ["kotik.jfif", "imgAuthor", "nameAuthor", "text111", 1],
    ["airplane.png", "imgAuthor2", "nameAuthor", "text2", 2],
    ["kotik.jfif", "imgAuthor2", "nameAuthor", "text3", 3],
    ["airplane.png", "imgAuthor", "nameAuthor", "text4", 4],
]

demo = document.getElementById("demo")


class Parent {
  constructor(imgAuthor, nameAuthor, text, idd) {
    this.imgAuthor = imgAuthor;
    this.nameAuthor = nameAuthor;
    this.text = text;
    this.id = idd;
  }
  fillContent() {
    var origPost = document.getElementById('origPost')
    if(origPost){
        var clonePost = origPost.cloneNode(true)

        clonePost.setAttribute('id', this.id)
        var postText = clonePost.getElementsByClassName('postText')[0]
        postText.innerHTML = this.text
        var postBox = document.getElementsByClassName('postBox')[0]
        postBox.appendChild(clonePost)
    }
  }
}
class Post extends Parent {
    constructor(imgContent, imgAuthor, nameAuthor, text, idd) { // Тут просто переменные
      super(imgAuthor, nameAuthor, text, idd);
      this.imgContent = imgContent; // тут создаются названия атрибутов
    }
    fillImg(){
        var clonePost = document.getElementById(this.id)
        console.log(this.id, clonePost)
        var imgPost = clonePost.getElementsByClassName('postImg')[0]
        imgPost.setAttribute('src', this.imgContent)
    }
}
class Comment extends Parent {
    constructor(imgAuthor, nameAuthor, text) { // Тут просто переменные
      super(imgAuthor, nameAuthor, text);
    }
}

myObjects = []
for(var i = 0; i < data2.length; i++){
    let myPost = new Post(data2[i][0], data2[i][1], data2[i][2], data2[i][3], 'post' + data2[i][4]);

    myObjects.push(myPost)
    myPost.fillContent()
    myPost.fillImg()
}



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
    if(origCard){
        cardBox = document.getElementById("cardBox")
        for(var i = 0; i < data1.length; i ++){
            cloneCard = origCard.cloneNode(true)
            cardTitle = cloneCard.getElementsByClassName("cardTitle")[0]
            cardTitle.innerHTML = data1[i]
            cardBox.appendChild(cloneCard)
        }
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
