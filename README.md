# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Preámbulo](#2-preámbulo)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Boilerplate](#4-boilerplate)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pruebas](#6-pruebas)
* [7. Pistas, tips y lecturas complementarias](#7-pistas-tips-y-lecturas-complementarias)
* [8. Consideraciones para pedir tu Project Feedback](#8-consideraciones-para-pedir-tu-project-feedback)
* [9. Objetivos de aprendizaje](#9-objetivos-de-aprendizaje)
* [10. Funcionalidades opcionales](#10-funcionalidades-opcionales)

***

## 1. Objetivos

Hacer un Analizador de texto que nos permita:
* Contar caracteres con espacios y sin espacios.
* Contar las palabras que contiene el texto.
* Contar cuántos números hay en nuestro texto considerando como números cifras de más de un caracter y números decimales.
* Hacer la suma de los números detectados.
* Realizar una longitud promedio de las palabras analizadas.
* Diseñar y desarrollar un producto poniendo a las usuarias en el centro.

## 2. Preámbulo

![Escritorio](https://cursotextosdigitales.files.wordpress.com/2020/08/produccion-de-textos.png)

_Credito: Anónimo, imágen extraída de [Wordpress](https://cursotextosdigitales.files.wordpress.com/2020/08/produccion-de-textos.png)_


El análisis de texto es un proceso que consiste en analizar los textos para extraer de ellos datos legibles por los sistemas informáticos.

Es útil para cualquier tipo de escritor (autor, periodista, investigador, etc.) que escribe textos con un determinado número mínimo y/o máximo de palabras. Ayuda a iddentificar la repetición innecesaria de algunas palabras y promueve una mejor armonización de la terminología utilizada. Incluso podrían calcular fácilmente el precio de un texto en función de las tarifas por palabra.

Esta herramienta también está destinada a los profesores, para quienes es útil evaluar el nivel de dificultad y la habilidad requerida para comprender un texto.

Las empresas lo utilizan para medir las opiniones de los clientes, hacer revisiones de los productos y recolectar comentarios que faciliten el análisis de sentimientos y la toma de decisiones basadas en datos.

## 3. Funcionalidades

Este analizador de texto es muy fácil de usar. Simplemente copie y pegue el texto o escríbalo directamente en el cuadro de texto, los datos se mostrarán al momento en que se detecte que tiene contenido.

La aplicación calcula las siguientes métricas y actualiza el resultado en tiempo real a medida que el usuario escribe su texto:

  **Recuento de caracteres**: la aplicación cuenta el número de caracteres en el texto de entrada, incluidos espacios y signos de puntuación.
  
  **Recuento de caracteres excluyendo espacios y signos de puntuación**: la aplicación debe cuenta el número de caracteres en el texto de entrada, excluyendo espacios y signos de puntuación.  

  **Recuento de palabras**: la aplicación cuenta el número de palabras en el texto de entrada.
  
  **Recuento de números**: la aplicación cuenta cuántos números hay en el texto de entrada, va a considerar como un sólo número las cifras que entren, hasta que sea separada por un espacio.

  **Suma total de números**: la aplicación va sumando todos los números que hay en el texto de entrada.

  **Longitud media de las palabras**: la aplicación calcula la longitud media de las palabras en el texto de entrada 

3. La aplicación permite borrar el contenido de la caja de texto y de las métricas haciendo click en el boton "Borrar texto".

![Text analyzer demo](https://github-production-user-asset-6210df.s3.amazonaws.com/12631491/240650556-988dcd6f-bc46-473b-894c-888a66c9fe2d.gif "Text analyzer demo")

## 4. Desiciones de diseño

Hice el prototipo de baja fidelidad con la estructura que quería que tuviera para guiarme al momento de realizar el HTML













* `README.md`: debes modificarlo para explicar la información necesaria para el
  uso de tu aplicación
  web, así como una introducción a la aplicación, su funcionalidad y decisiones
  de diseño que tomaron.
* `.github/workflows`: esta carpeta contine la configuracion para la ejecution
  de Github Actions. No debes modificar esta carpeta ni su contenido.
* `docs/images`: contiene las imagenes de este README.
* `read-only/`: esta carpeta contiene las pruebas de criterios mínimos de
  aceptación y end-to-end. No debes modificar esta carpeta ni su contenido.
* [`src/index.html`](./src/index.html): este es el punto de entrada a tu
  aplicación. Este archivo debe contener tu HTML.
* [`src/style.css`](./src/style.css): este archivo debe contener las reglas de
  estilo. Queremos que escribas tus propias reglas, por eso NO está permitido el
  uso de frameworks de CSS (Bootstrap, Materialize, etc).
* [`src/analyzer.js`](./src/analyzer.js): acá debes implementar el objeto
  `analyzer`, el cual ya está _exportado_ en el _boilerplate_. Este objeto
  (`analyzer`) debe contener seis métodos:
  - `analyzer.getWordCount(text)`: esta función debe retornar el recuento de
  palabras que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCount(text)`: esta función debe retornar el recuento
  de caracteres que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getCharacterCountExcludingSpaces(text)`: esta función debe retornar
  el recuento de caracteres excluyendo espacios y signos de puntuación que se
  encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberCount(text)`: esta función debe retornar cúantos números
  se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getNumberSum(text)`: esta función debe retornar la suma de todos
  los números que se encuentran en el parámetro `text` de tipo `string`.
  - `analyzer.getAverageWordLength(text)`: esta función debe retornar la longitud
  media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  En este caso usa 2 dígitos decimales.

  Para ejemplo de uso de cada función recomendamos ver el archivo
  [`test/analyzer.spec.js`](./test/analyzer.spec.js).

  _Nota:  para simplificar las funcionalidades, definiremos las palabras como
  un grupos de caracteres separados por espacios. Por ejemplo las palabras del
  texto de entrada `¡Si, Tú puedes hacerlo!` son cuatro:_

  - _`¡Si,`_
  - _`Tú`_
  - _`puedes`_
  - _`hacerlo!`_

* [`src/index.js`](./src/index.js): acá debes escuchar eventos del DOM, invocar
  los métodos del objeto `analyzer` según sea necesario y actualizar el resultado
  en la UI (interfaz de usuario).
* [`test/analyzer.spec.js`](./test/analyzer.spec.js): este archivo contiene las
pruebas unitarias para los métodos del objeto `analyzer`.

***

