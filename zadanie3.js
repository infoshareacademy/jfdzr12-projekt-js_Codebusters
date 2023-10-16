// Generator silnego hasła
// Opracuj algorytm generujący silne hasło spełniające następujące wymogi:

// min. 1 mała litera
// min. 1 wielka litera
// min. 1 cyfra
// min. 1 znak specjalny
// o długości 12 znaków
// Program powinien być prosty we wprowadzaniu zmian powyższych kryteriów, tak aby możliwe było szybkie, jednolinijkowe zmodyfikowanie:

// minimalnej ilości znaków z wybranych grup
// oczekiwanej długości hasła, w przedziale np. 12-24 znaków

let minLowerLetterChar = 1;
let minUpperLetterChar = 1;
let minNumberChar = 1;
let minSpecialChar = 1;
let minPassLength = 12;
let maxPassLength = 24;

const lowerLetterCharsList = "abcdefghijklmnopqrstuvwxyz";
const upperLetterCharsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersCharsList = "1234567890";
const specialCharsList = "!@#$%^&*()_+[]{}|;:,.<>?";

let passLength = minPassLength;

function randomChar(charList) {
  let charactersLength = charList.length;
  return charList.charAt(Math.floor(Math.random() * charactersLength));
}

let lowerLetterChar = randomChar(lowerLetterCharsList);
let upperLetterChar = randomChar(upperLetterCharsList);
let numbersChar = randomChar(numbersCharsList);
let specialChar = randomChar(specialCharsList);

console.log(lowerLetterChar);
console.log(upperLetterChar);
console.log(numbersChar);
console.log(specialChar);
