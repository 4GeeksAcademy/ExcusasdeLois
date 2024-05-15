/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generandoexcusa() {
    let quien = ["Mi perro", "Mi abuela", "El cartero", "Mi pájaro"];
    let accion = ["se comió", "orinó en", "rompió", "aplastó"];
    let que = ["mi tarea", "mi teléfono", "el carro"];
    let cuando = [
      "antes de la clase",
      "mientras dormía",
      "mientras hacía ejercicio",
      "durante el almuerzo",
      "mientras rezaba"
    ];

    let quienrandom = quien[Math.floor(Math.random() * quien.length)]; //Math.random() devuelve un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    let accionrandom = accion[Math.floor(Math.random() * accion.length)]; //un índice aleatorio válido, debo * Math.random() por la longitud del array
    let querandom = que[Math.floor(Math.random() * que.length)]; //utilizo Math.floor() para redondear hacia abajo o arriba el número resultante.
    let cuandorandom = cuando[Math.floor(Math.random() * cuando.length)]; // lo que significa que seleccionaremos el elemento en la posición ? del array.

    let excusa = `${quienrandom} ${accionrandom} ${querandom} ${cuandorandom}`; // ${} para concatenar
    // Actualizamos el contenido de la etiqueta con la nueva excusa
    document.getElementById("excusalois").innerHTML = excusa; // document.getElementById() método predeterminado en JavaScript que se utiliza para seleccionar un elemento HTML en función de su ID
    //.innerHTML es una propiedad incorporada en JavaScript que se utiliza comúnmente para manipular el contenido HTML de los elementos seleccionados.
  }

  generandoexcusa(); // Llamamos a la función generandoexcusa() para que se ejecute cuando la página se cargue completamente
  console.log("Hello Rigo from the console!");
};
