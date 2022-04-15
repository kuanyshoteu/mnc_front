getData()
async function getData(){
    data = new FormData()
    // data.append('username', "Timur")
    request = await fetch('https://randomuser.me/api/', {
        method:"POST",
        bod
    })
    a = await request.json()
    console.log(a)
}





data1 = ["Free", "Standard", "Premium"]
// Это данные
data2 = [
    [["kotik.jfif", "airplane.png", "kotik.jfif"], "imgAuthor", "nameAuthor", "text111", 1, ['Comment1', 'Comment2']],
    [["airplane.png", "kotik.jfif"], "imgAuthor2", "nameAuthor", "text2", 2, ['Comment3', 'Comment4']],
    [["airplane.png"], "imgAuthor2", "nameAuthor", "text3", 3, ['Comment5', 'Comment6', 'Comment7']],
    [["airplane.png", "kotik.jfif"], "imgAuthor", "nameAuthor", "text4", 4, ['Comment8']],
]

demo = document.getElementById("demo")


class Parent {
  constructor(imgAuthor, nameAuthor, text, idd) {
    this.imgAuthor = imgAuthor;
    this.nameAuthor = nameAuthor;
    this.text = text;
    this.id = idd;
  }
  fillContent(contentType) {
    var origPost = document.getElementById('orig'+contentType)
    console.log(contentType)
    if(origPost){
        var clonePost = origPost.cloneNode(true)
        clonePost.setAttribute('id', this.id)
        var postText = clonePost.getElementsByClassName(contentType+'Text')[0]
        postText.innerHTML = this.text
        var postBox = document.getElementsByClassName(contentType+'Box')[0]
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
        var imgSrcs = this.imgContent
        var imgPostOrig = clonePost.getElementsByClassName('postImg')[0]

        //Чтобы размер картинки совпал с размером поста
        var postBox = document.getElementsByClassName('postBox')[0]
        var postWidth = postBox.offsetWidth // Достает длину без пиксели в виде числа
        var startLeft = clonePost.offsetLeft
        var postImgBox = clonePost.getElementsByClassName('postImgBox')[0]
        for(var i = 0; i < imgSrcs.length; i++){
            var imgPostCrnt = imgPostOrig.cloneNode(true)
            postImgBox.appendChild(imgPostCrnt)
            imgPostCrnt.setAttribute('src', imgSrcs[i])
            imgPostCrnt.setAttribute('class', 'postImg Img' + this.id)
            imgPostCrnt.style.width = postWidth + "px" // Задает длину с пикселями
            imgPostCrnt.style.left = startLeft + postWidth * (i) + "px" // Задает длину с пикселями
        }       
        // Правая кнопка
        var rightBtn = clonePost.getElementsByClassName('rightBtn')[0]
        rightBtn.style.left = clonePost.offsetLeft + clonePost.offsetWidth - rightBtn.offsetWidth + 'px'
        // onclick делаем
        rightBtn.setAttribute('onclick', "moveImg('"+ this.id + "', 'Right')")
        rightBtn.setAttribute('id', "moveImgRight"+ this.id)

        var leftBtn = clonePost.getElementsByClassName('leftBtn')[0]
        // onclick делаем
        leftBtn.setAttribute('onclick', "moveImg('"+ this.id + "', 'Left')")
        leftBtn.setAttribute('id', "moveImgLeft"+ this.id)
    }
}
function moveImg(idd, side){
    var postBox = document.getElementsByClassName('postBox')[0]
    var postRight = postBox.offsetLeft + postBox.offsetWidth
    postImg = document.getElementsByClassName('Img' + idd)
    btn = document.getElementById('moveImg' + side + idd)
    if(postImg[postImg.length - 1].offsetLeft < postRight + 50){
        btn.style.display = "none"
    }
    for(var i = 0; i < postImg.length; i++){
        leftt = postImg[i].offsetLeft
        widthh = postImg[i].offsetWidth
        limLeft = leftt - widthh
        recursionMoveRight(postImg[i], leftt, limLeft)
    }
}
function recursionMoveRight(postImg, leftt, limLeft){
    leftt -= 30
    postImg.style.left = leftt + 'px'
    if (leftt > limLeft){
        setTimeout(recursionMoveRight, 10, postImg, leftt, limLeft) 
    }
    else{
        postImg.style.left = limLeft + 'px'        
    }
}





class Comment extends Parent {
    constructor(imgAuthor, nameAuthor, text, idd) { // Тут просто переменные
      super(imgAuthor, nameAuthor, text, idd);
    }
}

function moveImg(){
    
}

myObjects = []
for(var i = 0; i < data2.length; i++){
    let myPost = new Post(data2[i][0], data2[i][1], data2[i][2], data2[i][3], 'post' + data2[i][4]);
    myObjects.push(myPost)
    myPost.fillContent("post")
    myPost.fillImg()
    for(var j = 0; j < data2[i][5].length; j++){
        myComment = new Comment(data2[i][1], data2[i][2], data2[i][5][j], 'post'+i+'comment'+j)
        myComment.fillContent("comment")
    }
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
    // 2. Найти нужный див
    nuznyiDiv = document.getElementById("answer")
    // 3. В этом диве поменять текст
    nuznyiDiv.innerHTML = "Works"
}


function krutaiaFunkcia(a, x){
    for(var i = 1; i <= 100; i++){
        if(i % 7 == 0 && i % 3 != 0){
        }
        else{
        }
        // Не совсем корректный способ
        // if(i % 7 == 0){
        //     if(i % 3 != 0){
        //         console.log(i)
        //     }
        // }
    }
}
