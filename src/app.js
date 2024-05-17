/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generandoExcusa() {
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

    let quienRandom = quien[Math.floor(Math.random() * quien.length)]; //Math.random() devuelve un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo)
    let accionRandom = accion[Math.floor(Math.random() * accion.length)]; //un índice aleatorio válido, debo * Math.random() por la longitud del array
    let queRandom = que[Math.floor(Math.random() * que.length)]; //utilizo Math.floor() para redondear hacia abajo o arriba el número resultante.
    let cuandoRandom = cuando[Math.floor(Math.random() * cuando.length)]; // lo que significa que seleccionaremos el elemento en la posición ? del array.

    // ${} para concatenar variables
    // Actualizamos el contenido de la etiqueta con la nueva excusa

    document.getElementById(
      "excusaLois"
    ).innerHTML = `${quienRandom} ${accionRandom} ${queRandom} ${cuandoRandom}`; // document.getElementById() método predeterminado en JavaScript que se utiliza para seleccionar un elemento HTML en función de su ID
    //.innerHTML es una propiedad incorporada en JavaScript que se utiliza comúnmente para manipular el contenido HTML de los elementos seleccionados.
  }
  generandoExcusa(); // Llama a la función generandoExcusa() para que se ejecute cuando la página se cargue completamente
};
