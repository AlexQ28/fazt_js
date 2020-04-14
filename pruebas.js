//Declaramos una funcion llamada saludar, que lleva
//'nombre' como argumento.
/*
function saludar(nombre) {
    return "Hola " + nombre; //Cuando se llama, esta funcion devuelve "Hola " y el nombre que se le ha pasado como argumento.
  }
  
  console.log(saludar("Alejandro")); // Nos devolvera "Hola Usuario".
*/

//document.write("<h1>Hello World</h1>"); //Se creo la etiqueta a traves de JS 

/*
//tipos de datos
"Hello World"; //string

100000 //Number
-2.3

//boolean
true
false

//array
['Joe', 'Ryan', 'Martha']
[1, 2, 3]
[true, false, true, false]

//object

{
  "username": 'Ryan', 
  "score": 70.4,
  "hour": 14,
  "profesional": true,
  friends: ['','','']
}
*/

/*
console.log("this is a string");
console.log(true);
console.log(14.4);
console.log([1, 2, 3, 4]);

//Objeto
console.log({"username": "Alex", "score":70.4});
*/
/*
let nameUser = "Jhon";
let lastName = " Carter"
console.log(nameUser + lastName);
*/

/*
const player = document.querySelector('p');

player.addEventListener('click', updateName);
function updateName(){
   let name = prompt('Enter a new name');
   player.textContent = 'Player 1: ' + name;
}
*/

/*
let numberOne = 100;
let numberTwo = 500;

let result = numberOne !== numberTwo;

console.log(result);
*/

//Comparacion de contraseñas 

/*
let passwordDB = 'pepe123'
let input = 'peped123'

let result = input == passwordDB;

if (result == true ){
   console.log('Login Correcto');
}
else{
  console.log('Login Incorrecto');
}
*/

/*
let score = 70

if (score > 30){
   console.log('You need to practice more');
}
else if (score > 15){
  console.log('You are improving');
}
else {
  console.log('You need to follow this course');
}
*/
//Función: crea un nuevo párrafo 
//y lo añade en la parte inferior del cuerpo HTML.
/*
function createParagraph(){
    let crear = document.createElement('p');
    crear.textContent = 'You clicked the button!';
    document.body.appendChild(crear);
}
*/
/*
  1. Obtiene referencias de todos los botones de la pagina y los ordena en una matriz. 
  2. Recorre todos los botones y añade un clic event listener a cada uno de ellos

  Cuando se pulsa cualquier boton, se ejecuta la funcion createParagraph().
*/
/*
let buttons = document.querySelectorAll('button');

for (let i = 0; i < buttons.length; i++){
   buttons[i].addEventListener('click', createParagraph);
}
*/





