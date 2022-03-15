


function colorKvadrat(){
    // 1. Откроет html документ
    // 2. Найти нужный див по классу
    var kvadrat = document.getElementsByClassName("kvadrat")[0]
    // console.log(kvadrat)
    // 3. Поменять background-color
    kvadrat.style.backgroundColor = "blue"
}

// kvadrat.style.top
// Что здесь происходит?
var kvadrat = document.getElementsByClassName("kvadrat")[0]
var leftt = 0
function moveKvadrat(){
    leftt += 30
    kvadrat.style.left = leftt + "px"
    if (leftt <= 900){
        setTimeout(moveKvadrat, 20) 
        // Ждет 20 милисекунд
    }
}


function solve(){
    // 1. Открое html документ
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
        // Не совсем корректный
        // if(i % 7 == 0){
        //     if(i % 3 != 0){
        //         console.log(i)
        //     }
        // }
    }
}