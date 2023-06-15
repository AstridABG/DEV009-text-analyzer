const analyzer = {  
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const textWOSpaceStart = text.trimStart();
    return textWOSpaceStart.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  
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
    const textWOSpaceStart = text.trimEnd();
    const arrayOfText = textWOSpaceStart.split(" "); 
    //alert(arrayOfText.length);
    return arrayOfText.length;
   
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const textWOSpaceStart = text.trimEnd();
    const arrayOfWords = textWOSpaceStart.split(" ");
    let counter = 0;
    for (let index=0; index<arrayOfWords.length; index++){
      const word = arrayOfWords[index];
      if (!isNaN(word)){
        counter++;
      }
      
    }
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
    
    const textWOSpaceStart = text.trimEnd();
    const arrayOfWords = textWOSpaceStart.split(" ");
    let numberSum = 0;
    
    for (let index=0; index<arrayOfWords.length; index++){
      const word = arrayOfWords[index];
      //console.log(word);
      //console.log(isNaN(word));
      if (!isNaN(word)){
        numberSum = numberSum + parseFloat(word);
      }
      
    }
    return numberSum;
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
    const sumOfNumbers = (arrayOfZero.length-1)*0 + (arrayOfOne.length-1)*1 +
    (arrayOfTwo.length-1)*2 + (arrayOfThree.length-1)*3 + (arrayOfFour.length-1)*4 +
    (arrayOfFive.length-1)*5 + (arrayOfSix.length-1)*6 + (arrayOfSeven.length-1)*7 +
    (arrayOfEight.length-1)*8 + (arrayOfNine.length-1)*9; 
    //alert(countOfNumbers);
    return sumOfNumbers ;*/
 
  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
    const textWOSpaceStart = text.trimEnd();
    const arrayOfWords = textWOSpaceStart.split(" ");
    let characterSum = 0;
    let division = 0;
    for (let index=0; index<arrayOfWords.length; index++){
    
      characterSum = characterSum + arrayOfWords[index].length;
      division =  characterSum / arrayOfWords.length;
    }
    return parseFloat(division.toFixed(2));
  },





  
};


export default analyzer;
