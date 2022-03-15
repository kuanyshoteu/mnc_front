


function colorKvadrat(){
    // 1. Откроет html документ
    // 2. Найти нужный див по классу
    var kvadrat = document.getElementsByClassName("kvadrat")[0]
    // console.log(kvadrat)
    // 3. Поменять background-color
    kvadrat.style.backgroundColor = "blue"
}

// Что здесь происходит?↓
var kvadrat = document.getElementsByClassName("kvadrat")[0]
// Что здесь происходит?↓
var leftt = 0
// Что здесь происходит?↓
function moveKvadrat(){
    // Что здесь происходит? ↓
    leftt += 30
    // Что здесь происходит?
    kvadrat.style.left = leftt + "px"
    // Что здесь происходит?
    if (leftt <= 900){
        setTimeout(moveKvadrat, 20)  // <-- Ждет 20 милисекунд и только потом запускает себя заново
    }
}

// Используйте kvadrat.style.top, чтобы квадрат двигался вертикально


// Что делает эта функция?↓
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
        // Не совсем корректный способ
        // if(i % 7 == 0){
        //     if(i % 3 != 0){
        //         console.log(i)
        //     }
        // }
    }
}
