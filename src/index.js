import analyzer from './analyzer.js';

let area = document.querySelector('textarea');
area.addEventListener('input', function() {
  // se escucha cada evento de teclado en el textarea con el name 'user-input'

  let li =  document.querySelector('.metricas').getElementsByTagName('li');
  //document.querySelector("ul");
 li[0].innerHTML=area.value;
 li[1].innerHTML=area.value;
 li[2].innerHTML=area.value;
 li[3].innerHTML=area.value;
 li[4].innerHTML=area.value;
 li[5].innerHTML=area.value;

 //alert("el valor del li en el indice 0 es "+li[0].innerHTML);
 // alert("el valor del li en el indice 1 es "+li[1].innerHTML);
//  alert("el valor del li en el indice 2 es "+li[2].innerHTML);
//alert("el valor del li en el indice 3 es "+li[3].innerHTML);
//    alert("el valor del li en el indice 4 es "+li[4].innerHTML);
//  alert("el valor del li en el indice 5 es "+li[5].innerHTML);
 /* for(let indice=0; indice<li.length; indice++){
      alert("estoy en el indice: "+indice);
      alert("el valor del li en el indice "+indice+" es "+li[indice].innerHTML);
//        li[indice].innerHTML = "hola"+iindice;

  }*/
}, false);