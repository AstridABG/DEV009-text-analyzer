const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
  let textWOSpaceStart = text.value.trimStart();
  let arrayOfText = textWOSpaceStart.split(" "); 
   //alert(arrayOfText.length);
  return arrayOfText.length;
  },

  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    let textWOSpaceStart = text.value.trimStart();
    return textWOSpaceStart.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
  
  let strWODots = text.value.replaceAll(".", "");
  let strWOComma = strWODots.replaceAll(",", "");
  let strWOColon = strWOComma.replaceAll(":", "");
  let strWOSemicolon = strWOColon.replaceAll(";", "");
  let strWODash = strWOSemicolon.replaceAll("-", "");
  let strWOApostrophe = strWODash.replaceAll("\'", "");
  let strWOQuest1 = strWOApostrophe.replaceAll("¿", "");
  let strWOQuest2 = strWOQuest1.replaceAll("?", "");
  let strWOExclam1 = strWOQuest2.replaceAll("¡", "");
  let strWOExclam2 = strWOExclam1.replaceAll("!", "");
  let strWOBracket1 = strWOExclam2.replaceAll("[", "");
  let strWOBracket2 = strWOBracket1.replaceAll("]", "");
  let strWOParent1 = strWOBracket2.replaceAll("(", "");
  let strWOParent2 = strWOParent1.replaceAll(")", "");
  let strWOAste = strWOParent2.replaceAll("*", "");
  let strWOQuote = strWOAste.replaceAll("\"", "");
  let strWOUnderScore = strWOQuote.replaceAll("_", "");
  let strWOEspace = strWOUnderScore.replaceAll(" ", "");

  return strWOEspace.length;

  },

  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  
    let textWOSpaceStart = text.value.trimStart();
    let arrayOfWords = textWOSpaceStart.split(" ");
    let characterSum = 0;
    for (let index=0; index<arrayOfWords.length; index++){
    
      characterSum = characterSum + arrayOfWords[index].length;
      
    }
  return characterSum / arrayOfWords.length;
  },

  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    let textWOSpaceStart = text.value.trimStart();
    let arrayOfZero = textWOSpaceStart.split("0");
    let arrayOfOne = textWOSpaceStart.split("1");
    let arrayOfTwo = textWOSpaceStart.split("2");
    let arrayOfThree = textWOSpaceStart.split("3");
    let arrayOfFour = textWOSpaceStart.split("4");
    let arrayOfFive = textWOSpaceStart.split("5");
    let arrayOfSix = textWOSpaceStart.split("6");
    let arrayOfSeven = textWOSpaceStart.split("7");
    let arrayOfEight = textWOSpaceStart.split("8");
    let arrayOfNine = textWOSpaceStart.split("9");
    let countOfNumbers = arrayOfZero.length + arrayOfOne.length +
     arrayOfTwo.length + arrayOfThree.length + arrayOfFour.length +
      arrayOfFive.length + arrayOfSix.length + arrayOfSeven.length +
       arrayOfEight.length + arrayOfNine.length; 
   //alert(countOfNumbers);
       return countOfNumbers - 10;

  },

  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    let textWOSpaceStart = text.value.trimStart();
    let arrayOfZero = textWOSpaceStart.split("0");
    let arrayOfOne = textWOSpaceStart.split("1");
    let arrayOfTwo = textWOSpaceStart.split("2");
    let arrayOfThree = textWOSpaceStart.split("3");
    let arrayOfFour = textWOSpaceStart.split("4");
    let arrayOfFive = textWOSpaceStart.split("5");
    let arrayOfSix = textWOSpaceStart.split("6");
    let arrayOfSeven = textWOSpaceStart.split("7");
    let arrayOfEight = textWOSpaceStart.split("8");
    let arrayOfNine = textWOSpaceStart.split("9");
    let sumOfNumbers = (arrayOfZero.length-1)*0 + (arrayOfOne.length-1)*1 +
    (arrayOfTwo.length-1)*2 + (arrayOfThree.length-1)*3 + (arrayOfFour.length-1)*4 +
    (arrayOfFive.length-1)*5 + (arrayOfSix.length-1)*6 + (arrayOfSeven.length-1)*7 +
    (arrayOfEight.length-1)*8 + (arrayOfNine.length-1)*9; 
   //alert(countOfNumbers);
       return sumOfNumbers ;
 
  },

  
};

export default analyzer;
