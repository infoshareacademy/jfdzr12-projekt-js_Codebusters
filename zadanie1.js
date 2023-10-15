// Ekstraktor hashtagów
// Bazując na danym ciągu znaków, wypisz wszystkie hashtagi w nim zawarte.
// Przykładowo dla napisu Pierwszy #projekt #javascript powinno to być
// projekt
// javascript

const text = "Pierwszy #projekt #javascript";

//z uzyciem Regex;
const textRegex = /#\w+/g;
let wordsArr = text.match(textRegex);
console.log(wordsArr);

function removeHashFromArr(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].substring(1);
  }
  console.log(arr);
  return arr;
}

let arrWithoutHash = removeHashFromArr(wordsArr);
let strWithoutHash = arrWithoutHash.toString(" ");
console.log(strWithoutHash);

//z uzyciem .slise();
console.log(text.slice(10, 17));
console.log(text.slice(19, 29));
