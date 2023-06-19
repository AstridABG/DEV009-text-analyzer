const analyzer = {  
  getCharacterCount: (text) => {
    /*TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    Primeropara evitar unos espacios que se me agregaban al inicio la función elimina los espacios en blanco al principio del texto 
    usando el método trimStart().*/
    const textWOSpaceStart = text.trimStart();
    /*La propiedad length indica la cantidad de elementos que contiene el objeto. En esta expresion de retorno
    devuelve el numero de caracteres dentro de la constante textWOSpaceStart.*/
    return textWOSpaceStart.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    /*Como lo que queria era hacer el conteo de caracteres sin espacios ni simbolos, declare variables que eliminaran los caracteres a omitir uno por uno
    utilizando el metodo replaceAll se fueron reemplazando los caracteres y espacios por strings vacios estas variables se fueron concatenado con la siguiente para ser inicializadas.
    Al final el return nos regresa el recuento ya sin los caracteres elegidos.*/
    const strWODots = text.replaceAll(".", "");
    const strWOComma = strWODots.replaceAll(",", "");
    const strWOColon = strWOComma.replaceAll(":", "");
    const strWOSemicolon = strWOColon.replaceAll(";", "");
    const strWODash = strWOSemicolon.replaceAll("-", "");
    const strWOApostrophe = strWODash.replaceAll("'", "");
    const strWOQuest1 = strWOApostrophe.replaceAll("¿", "");
    const strWOQuest2 = strWOQuest1.replaceAll("?", "");
    const strWOExclam1 = strWOQuest2.replaceAll("¡", "");
    const strWOExclam2 = strWOExclam1.replaceAll("!", "");
    const strWOBracket1 = strWOExclam2.replaceAll("[", "");
    const strWOBracket2 = strWOBracket1.replaceAll("]", "");
    const strWOParent1 = strWOBracket2.replaceAll("(", "");
    const strWOParent2 = strWOParent1.replaceAll(")", "");
    const strWOAste = strWOParent2.replaceAll("*", "");
    const strWOQuote = strWOAste.replaceAll("\"", "");
    const strWOUnderScore = strWOQuote.replaceAll("_", "");
    const strWOEspace = strWOUnderScore.replaceAll(" ", "");

    return strWOEspace.length;

  },
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    /*En esta funcion se cuenta como una nueva palabra cada que hay un espacio, pero para que no subiera el contador cada 
    que ponia un espacio sino despues del espacio al poner la primer letra de la siguiente palabra, utilice trimEnd para 
    eliminar los espacios en blanco al final de cada palabra*/
    const textWOSpaceEnd = text.trimEnd();
    /*Se utiliza la funcion split("_") para dividir el texto en un array de palabras tomando por argumento el separador de 
    "Espacio" para dividir las cadenas */
    const arrayOfText = textWOSpaceEnd.split(" "); 
    //Se retorna la longitud del arreglo que es = al numero de palabras en el texto
    return arrayOfText.length;
   
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    /*Considerand como numero al conjunto de 1 o mas cifras separadas por espacios, se uso la misma logica 
    que en la funcion anterior. se elimina el espacio al final de cada texto*/
    const textWOSpaceEnd = text.trimEnd();
    //Se divide el texto en un arreglo de palabras considerando los espacios como separador.
    const arrayOfNumbers = textWOSpaceEnd.split(" ");
    /*Se declara una variable en 0 */
    let counter = 0;
    /*Se declara un ciclo for que va a recorrer cada parte del texto iniciando en el indice 0 en un loop
    siempre y cuando index sea menor que la longitud de arrayOfNumbers, si cumple con la condicion ira incrementando 
    despues de cada vuelta al bucle  */
    for (let index=0; index<arrayOfNumbers.length; index++){
      //variable que contiene va a contener el arreglo de numeros
      const numbers = arrayOfNumbers[index];
      /*Como lo que queremos es que diferencie numeros de letras, se tiene que comprobar si es un numero
      utilizando la negacon del metodo isNaN (is not a number) con un "!*/
      if (!isNaN(numbers)){
        //Si la palabra es un numero, incrementa el contador en 1.
        counter++;
      }
      
    }
    //Despues de recorrer todas las palabras, devuelve la variable contador.
    return counter;
  
    /*const textWOSpaceStart = text.value;
    const arrayOfZero = textWOSpaceStart.split("0");
    const arrayOfOne = textWOSpaceStart.split("1");
    const arrayOfTwo = textWOSpaceStart.split("2");
    const arrayOfThree = textWOSpaceStart.split("3");
    const arrayOfFour = textWOSpaceStart.split("4");
    const arrayOfFive = textWOSpaceStart.split("5");
    const arrayOfSix = textWOSpaceStart.split("6");
    const arrayOfSeven = textWOSpaceStart.split("7");
    const arrayOfEight = textWOSpaceStart.split("8");
    const arrayOfNine = textWOSpaceStart.split("9");
    const countOfNumbers = arrayOfZero.length + arrayOfOne.length +
    arrayOfTwo.length + arrayOfThree.length + arrayOfFour.length +
    arrayOfFive.length + arrayOfSix.length + arrayOfSeven.length +
    arrayOfEight.length + arrayOfNine.length; 
    //alert(countOfNumbers);
    return countOfNumbers - 10; */

  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    /*De la linea 101 a la 106 el desarrollo es igual a la funcion anterior, 
    cortando el espacio en blanco al final de cada texto, dividiendo el contenido en arreglos utilizando el espacio como delimitador
    se utiliza un bucle for para iterar sobre cada palabra y por cada una se verifica si es un numero */
    const textWOSpaceEnd = text.trimEnd();
    const arrayOfNumbers = textWOSpaceEnd.split(" ");
    //Inicializamos una variable con el valor de 0
    let numberSum = 0; 
    for (let index=0; index<arrayOfNumbers.length; index++){
      const number = arrayOfNumbers[index];
      if (!isNaN(number)){
        /*En esta ocasion si se detecta un numero se analiza/parsea y se agrega a number sum, y como esta en bucle, cada que detecte un numero
        se va a ir sumando a la variable numberSum*/
        numberSum = numberSum + parseFloat(number);
      }
      
    }
    //Retorna el valor de numberSum.
    return numberSum;
 
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    //Se eliminan los espacios al fnal de cada palabra
    const textWOSpaceEnd = text.trimEnd();
    /*Se divide la cadena de texto en un arreglo de palabras delimitando con el espacio */
    const arrayOfWords = textWOSpaceEnd.split(" ");
    //Se inicializan dos variables una para almacenar la suma de los caracteres y otra para almacenar el valor del promedio.
    let characterSum = 0;
    let division = 0;
    //Se utiliza un bucle for para recorrer cada palabra en el array
    for (let index=0; index<arrayOfWords.length; index++){
      //en cada iteracion, se suma la longitud de la palabra actual a la variable characterSum.
      characterSum = characterSum + arrayOfWords[index].length;
      //Se calcula el promedio dividiendo characterSum por la longitud del arreglo y se almacena en la variable division
      division =  characterSum / arrayOfWords.length;
    }
    /*Se retorna el valor de division con dos decimales utilizando los metodos parseFloat y toFixed(2) para que nos muestre solo dos decimales*/
    return parseFloat(division.toFixed(2));
  },





  
};


export default analyzer;
