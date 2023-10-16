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
let passCharLength =
  Math.floor(Math.random() * (maxPassLength - minPassLength + 1)) +
  minPassLength;

let randomCharsLength =
  passCharLength -
  minLowerLetterChar -
  minUpperLetterChar -
  minNumberChar -
  minSpecialChar;

console.log(randomCharsLength);

const lowerLetterCharsList = "abcdefghijklmnopqrstuvwxyz";
const upperLetterCharsList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbersCharsList = "1234567890";
const specialCharsList = "!@#$%^&*()_+[]{}|;:,.<>?";
const allCharsList =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+[]{}|;:,.<>?";

//Function to generate random chars list from chars string
function randomCharsList(charList, charsNumber) {
  if (charList.length === 0) {
    console.error("Error: charList should not be empty.");
    return null;
  }

  const charsListLength = charList.length;
  let charsListRandom = "";
  for (let i = 0; i < charsNumber; i++) {
    charsListRandom += charList[Math.floor(Math.random() * charsListLength)];
  }
  return charsListRandom;
}

let lowerLetterChar = randomCharsList(lowerLetterCharsList, minLowerLetterChar);
let upperLetterChar = randomCharsList(upperLetterCharsList, minUpperLetterChar);
let numbersChar = randomCharsList(numbersCharsList, minNumberChar);
let specialChar = randomCharsList(specialCharsList, minSpecialChar);
let randomChars = randomCharsList(
  allCharsList,
  Math.max(randomCharsLength, 0) //  Ensure non-negative length
);

console.log(lowerLetterChar);
console.log(upperLetterChar);
console.log(numbersChar);
console.log(specialChar);
console.log(randomChars);

let generatedPassword =
  lowerLetterChar + upperLetterChar + numbersChar + specialChar + randomChars;

console.log(generatedPassword);
