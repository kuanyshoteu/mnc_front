
data = ["Free", "Standard", "Premium"]
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
        // Запускайте функцию влево
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
