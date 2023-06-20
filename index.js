import analyzer from './analyzer.js';

// Se declara la constante "area" que se utiliza para seleccionar el elemento textarea del HTML
const area = document.querySelector('textarea');
/* Se agrega un evento 'keyup' al elemento "area". Este evento se activa cuando se suelta una tecla despues de presionarla
  y se puede utilizar para detectar cuando se ha soltado una tecla especifica. En esta ocasion es utilizada para llamar a una 
  funcion cada que se suelta una tecla en el textarea del HTML, la funcion actualiza los elementos HTML en tiempo real cada vez que se suelta 
  una tecla en el area de texto */ 
area.addEventListener('keyup', function() {
  /* Dentro de la funcion:
  Con la instruccion document.querySelector sobre la clase metricas, y ejecutando el metodo getElementsByTagName obtenemos solo 
  las etiquetas li y las metemos a un arreglo con todos los elementos de la lista y lo guardamos en la variable "li"*/
  const li =  document.querySelector('.metricas').getElementsByTagName('li');
 
  /* El elemento metricas (una lista en HTML) tiene 6 elementos li. Cada elemento del arreglo "li" tiene una etiqueta cuyo valor se cambiara con el 
  resultado de cada una de las funciones del objeto analyzer. 
  Las metricas se van actualizando en tiempo real de acuerdo al contenido del textarea utilizando los metodos del objeto "analyzer"*/
  
  /* "for(let indice=0; indice<li.length; indice++){}" no fue utilizado en esta ocasion porque sabemos 
  cuantos elementos tiene el arreglo (6) y eso no va cambiar.
  */
  li[0].innerHTML=analyzer.getCharacterCount(area.value);
  li[1].innerHTML=analyzer.getCharacterCountExcludingSpaces(area.value);
  li[2].innerHTML=analyzer.getWordCount(area.value);
  li[3].innerHTML=analyzer.getNumberCount(area.value);
  li[4].innerHTML=analyzer.getNumberSum(area.value);
  li[5].innerHTML=analyzer.getAverageWordLength(area.value);
  //alert("el valor del li en el indice 0 es "+li[0].innerHTML);
  // alert("el valor del li en el indice 1 es "+li[1].innerHTML);
  //  alert("el valor del li en el indice 2 es "+li[2].innerHTML);
  //alert("el valor del li en el indice 3 es "+li[3].innerHTML);
  //    alert("el valor del li en el indice 4 es "+li[4].innerHTML);
  //  alert("el valor del li en el indice 5 es "+li[5].innerHTML);
  
}, false);
 
//boton de reset
const resetButton = document.getElementById('reset-button')
/*Sacamos la constante li de la funcion anterior, ya que al haberla declarado dentro de una funcion es una variable privada/anidada
y no podriamos utilizarla fuera de la funcion*/
const li = document.querySelector('.metricas').getElementsByTagName('li');
/*El metodo addEventListener() es utilizado para agregar un evento a un elemento HTML, en este caso 
el evento es un clic en el boton con el Id='reset-button'*/
resetButton.addEventListener('click', function (){
  /*Cuando se hace clic en el boton, la funcion se ejecuta y establece el valor del area de texto en una cadena vacia
  y para el caso de los li's les asigne el valor de 0 para cuando se haga click en el boton */
  area.value = "";
  li[0].innerHTML = "0";
  li[1].innerHTML = "0";
  li[2].innerHTML = "0";
  li[3].innerHTML = "0";
  li[4].innerHTML = "0";
  li[5].innerHTML = "0";
});

