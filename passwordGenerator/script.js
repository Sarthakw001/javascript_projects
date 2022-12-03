const resultEl = document.getElementById("result");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numbersEl = document.getElementById("numbers");
const symbolsEl = document.getElementById("symbols");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

clipboardEl.addEventListener("click", () => {
  navigator.clipboard.writeText(resultEl.innerText);
  alert("Text Copied");
});

generateEl.addEventListener("click", () => {
  let length = parseFloat(lengthEl.value);
  let lower_checked = lowercaseEl.checked;
  let upper_checked = uppercaseEl.checked;
  let number_checked = numbersEl.checked;
  let symbol_checked = symbolsEl.checked;

  let password = generatePassword(
    lower_checked,
    upper_checked,
    number_checked,
    symbol_checked,
    length
  );

  resultEl.innerText = password;
});

function generatePassword(lower, upper, number, symbol, length) {
  let password = "";
  if (lower) {
    password = password + getRandomLower();
  }
  if (upper) {
    password = password + getRandomUpper();
  }
  if (number) {
    password = password + getRandomNumber();
  }
  if (symbol) {
    password = password + getRandomSymbol();
  }

  let ans = "";
  for (let i = 0; i < length; i++) {
    ans = ans + password[Math.floor(Math.random() * password.length)];
  }
  return ans;
}

function getRandomLower() {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let lower_pass = "";
  for (let i = 0; i < 5; i++) {
    lower_pass = lower_pass + lower[Math.floor(Math.random() * 25)];
  }
  return lower_pass;
}

function getRandomUpper() {
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let upper_pass = "";
  for (let i = 0; i < 5; i++) {
    upper_pass = upper_pass + upper[Math.floor(Math.random() * 25)];
  }
  return upper_pass;
}

function getRandomNumber() {
  let number = "1234567890";
  let number_pass = "";
  for (let i = 0; i < 5; i++) {
    number_pass = number_pass + number[Math.floor(Math.random() * 9)];
  }
  return number_pass;
}

function getRandomSymbol() {
  let symbol = "!@#$%^&*_";
  let symbol_pass = "";
  for (let i = 0; i < 5; i++) {
    symbol_pass = symbol_pass + symbol[Math.floor(Math.random() * 7)];
  }
  return symbol_pass;
}
