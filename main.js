"use stric";
/*
TO DO: minimo de  lo que debo hacer 
Tarea:
Temporarizador o timer:
SetInterval: Tener un temporarizador que cambia constantemente.
SetTimeout: Utiliza un tiempo especifico
*/
//Event Listener de Video.
/*
let Videohub = document.querySelector('.botonVideo');
console.log(Videohub);

Videohub.addEventListener("play", function () {
    console.log("Se dio play al video xd")
})
Videohub.addEventListener("seeking", function () {
    console.log('Se esta usando la barra de visualizacion del video', this.currentTime);
})
Videohub.addEventListener('ended', function () {
    console.log('Se termino el video yuhu')
})
Videohub.addEventListener('pause', function (){
    console.log('Se pauso el vido pipipipi')
})
*/

// let timer = setInterval(function () {
//     WARIO();
// }, 2000);

/*
let Videohub = document.querySelector('.botonVideo');
console.log(Videohub);

Videohub.addEventListener("play", function () {
    WARIO();
    console.log("Se dio play al video xd");
});

Videohub.addEventListener('pause', function (){
    console.log('Se pauso el vido pipipipi');
    let decision = confirm('¿Deseas ver de nuevo el video?');
    console.log(decision);
    if (decision) {
        Videohub.play();
    }else{
        window.location = "https://static.wikia.nocookie.net/villains/images/9/9c/Eduardo_Perez.png/revision/latest?cb=20220715080210";
    }
});
// let timer = setTimeout(function() {
//     WARIO();
// }, 3000);

function WARIO(){
    let pantalla = document.body;
    pantalla.style.backgroundColor = "yellow";
    console.log('WAAAAAAAAAAAAAAARIO TIME!')
}
*/

let array = ['one', 'two', 3];

let array2 = ['Hail', 'Futher', 5]

array2[1]

let combinacion_normal = [array, array2];

combinacion_normal[0][1]; // = "dos"
