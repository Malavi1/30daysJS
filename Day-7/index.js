const lowerAlph = "abcdefghijklmnopqrstuvwxyz";

const upperCaseAlp = "ABCDEFGHIJKLMOPQRSTUVWXYZ";

const digits = "123456789";

const specialChar = "!&^*()#$@%_+?:><|=-/.";

const randomString = specialChar + +lowerAlph + digits + upperCaseAlp;
const passwordlen = 18;

const display = document.getElementById("result");
const passwordGrnBtn = document.getElementById("genbtn");

function PasswordGenerator() {
  document.getElementById("copy").className = "fa-regular fa-copy ";
  let password = "";
  password += lowerAlph[Math.floor(Math.random() * lowerAlph.length)];
  password += upperCaseAlp[Math.floor(Math.random() * upperCaseAlp.length)];
  password += digits[Math.floor(Math.random() * digits.length)];
  password += specialChar[Math.floor(Math.random() * specialChar.length)];
  while (password.length < passwordlen) {
    password += randomString[Math.floor(Math.random() * randomString.length)];
  }
  display.value = password;
}

PasswordGenerator();

function copyPassword() {
  document.getElementById("copy").className = "fa-solid fa-copy";
  display.select();
  document.execCommand("copy");
}
