
var a = 0;
var a = "stu";
var a = true

var a = [1, 5, 'cccc']

console.log(a)

for(var i = 0; i < 100; i++){
    if(i % 5 == 0){
        console.log(i)
    }
}


function showText(){
    console.log("Rabotaet")
    // 1. Найти элемент по айди
    a = document.getElementById('description')
    console.log(a)
    // 2. Изменить его текст
    a.innerHTML = "Rabotaet"
}