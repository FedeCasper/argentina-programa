//Objetos

let libro = {
     titulo: "IT",
     paginas: 1500,
     genero:["terror", "suspenso"],
     autor: "Stephen King",
     ediciones:{
          deBolsillo: true,
          normal: true,
          premium: false,
     }
}

console.log(libro)

//Modificar propiedades de un objeto
libro.paginas = 1550;

//Agregar propiedades a un objeto
libro.precio = 3500.00;
libro.calificacion = 5;

//Eliminar una propiedad de un objeto
delete libro.calificacion;

//Instanciando un objeto a través de new
let libro2 = new Object({
     titulo: "La Torre Oscura I"
})

console.log(libro2)

//Metodos de objetos
//.keys
console.log(Object.keys(libro))

//.values
console.log(Object.values(libro))

//.entries
console.log(Object.entries(libro));

//Arrays

let podioCopaDelMundo = ["Argentina", "Francia", "Croacia"];

//.length
console.log(podioCopaDelMundo.length); 

let eliminadosEnPrimeraRonda = new Array("Alemania", "Arabia", "Camerún")

console.log(eliminadosEnPrimeraRonda);

//Modificar un valor de un array
eliminadosEnPrimeraRonda[1] = "Mexico"
console.log(eliminadosEnPrimeraRonda);

//Metodos que elmininan un elemento del array
// .shift()
eliminadosEnPrimeraRonda.shift();
console.log(eliminadosEnPrimeraRonda);

//.pop()
eliminadosEnPrimeraRonda.pop();
console.log(eliminadosEnPrimeraRonda);

//Metodos para agregar elementos a un array
//.push()
eliminadosEnPrimeraRonda.push("Uruguay");
console.log(eliminadosEnPrimeraRonda);

//.unshift()
eliminadosEnPrimeraRonda.unshift("Ecuador");
console.log(eliminadosEnPrimeraRonda);

//.indexof()
console.log(podioCopaDelMundo.indexOf("Argentina")); 
console.log(podioCopaDelMundo.indexOf("Francia")); 
console.log(podioCopaDelMundo.indexOf("argentina"));  

//.includes()
console.log(podioCopaDelMundo.includes("Brasil"));
console.log(podioCopaDelMundo.includes("Croacia"));

//Métodos que convierten un array a una cadena de caracteres
//.tostring()
let numero = [1,2,3]
console.log(podioCopaDelMundo.toString());
console.log(numero.toLocaleString('es-ES', { style: 'currency', currency: 'EUR' }));

//.join()
console.log(podioCopaDelMundo.join(" ⚽ "));

//.concat()
console.log(podioCopaDelMundo.concat(eliminadosEnPrimeraRonda));
