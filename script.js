// // Assignment Code

// // this is the generate button that makes the pop up com up

// // pop up container or pop up form

// // this is your submit button
// const submitEl = document.getElementById('submit');
// // this is your cancel button
// const cancelEl = document.getElementById('cancel');

// // these are the password criterias
// const lengthEl = document.getElementById('length');
// const uppercaseEl = document.getElementById('uppercase');
// const lowercaseEl = document.getElementById('lowercase');
// const numberEl = document.getElementById('number');
// const symbolEl = document.getElementById('symbol');

// const passwordEl = document.getElementById('password');



// start
const rangeEl = document.getElementById('range')
const lengthEl = document.getElementById('length')
const upperCaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const submitEl = document.getElementById('submit')
const passwordEl = document.getElementById('password')
var generateBtn = document.querySelector("#generate");
var container = document.querySelector(".container");

const uppercaseChar = arrayFromLowToHigh(65, 90)
const lowercaseChar = arrayFromLowToHigh(97, 122)
const numberChar = arrayFromLowToHigh(48, 57)
const symbolChar = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
)

// this causes the genreate button to open the pop up form
generateBtn.onclick = function(){
  container.style.display = "block";
}

document.getElementById("submit").addEventListener("click", e => {
  e.preventDefault()
  const length = lengthEl.value
  const uppercase = upperCaseEl.checked
  const number = numbersEl.checked
  const symbol = symbolEl.checked
  const password = generatePassword(length, uppercase, number, symbol)
  passwordEl.innerText = password
  // console.log(password);
  container.style.display = "none";
  
})

function generatePassword(length, uppercase, number, symbol) {
  let charCodes = lowercaseChar
  if (uppercase) charCodes = charCodes.concat(uppercaseChar)
  if (symbol) charCodes = charCodes.concat(symbolChar)
  if (number) charCodes = charCodes.concat(numberChar)
  
  const passwordCharacters = []
  for (let i = 0; i < length; i++) {
    const characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

