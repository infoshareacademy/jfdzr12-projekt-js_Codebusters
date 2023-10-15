// Ekstraktor hashtagów
// Bazując na danym ciągu znaków, wypisz wszystkie hashtagi w nim zawarte.
// Przykładowo dla napisu Pierwszy #projekt #javascript powinno to być
// projekt
// javascript

const text = "Pierwszy #projekt #javascript";

//z uzyciem Regex;
const textRegex = "#w+";
const word1 = text.match(textRegex);
const word2 = text.match(textRegex);
console.log(word1);
console.log(word2);

//z uzyciem .slise();
console.log(text.slice(10, 17));
console.log(text.slice(19, 29));
