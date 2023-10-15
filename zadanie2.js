// Zmiana formatu napisu
// Wypisz alternatywną formę napisu w postaci PascalCase.
// Przyjmij, że bazowy napis może być zapisany w formacie camelCase, PascalCase, snake_case lub kebab-case.
// Np. dla projekt-java-script wypisany powinien zostać napis ProjektJavaScript.

const str = "projekt-java-script"; //camelCase PascalCase snake_case kebab-case

function splitText(str) {
  if (str.includes("-")) {
    return str.split("-");
  } else if (str.includes("_")) {
    return str.split("_");
  } else {
    return str.split();
  }
}

let strSplited = splitText(str);
console.log(strSplited);

function splitTextUpper(arr) {
  for (let i = 0; i < arr.length; i++) {
    let strSplitedIndex = arr[i];
    arr[i] = strSplitedIndex[0].toUpperCase() + strSplitedIndex.substring(1);
  }
  return arr;
}

let strSplitedFirstUpper = splitTextUpper(strSplited);

let joinedStr = strSplitedFirstUpper.join("");
console.log(joinedStr);
