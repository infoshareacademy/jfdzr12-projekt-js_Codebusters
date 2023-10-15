// Zmiana formatu napisu
// Wypisz alternatywną formę napisu w postaci PascalCase.

// Przyjmij, że bazowy napis może być zapisany w formacie camelCase, PascalCase, snake_case lub kebab-case.

// Np. dla projekt-java-script wypisany powinien zostać napis ProjektJavaScript.

const str = "projekt-java-script";

function splitText(str) {
  if (str.includes("-")) {
    return str.split("-");
  } else if (str.includes("_")) {
    return str.split("_");
  }
}

let strSplited = splitText(str);
console.log(strSplited);

function splitTextUpper() {
  for (i = 0; i <= strSplited.length; i++) {
    let strSplitedIndex = strSplited[i];
    strSplitedIndex[0].toUpperCase() +
      strSplitedIndex.substring(1).toLowerCase();
  }
}

let strSplitedFirstUpper = splitTextUpper();

// let joinedStr = strSplitedFirstUpper.join("");
// console.log(joinedStr);
