// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordTextArea = document.querySelector("#password");
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialCharacters = ".:,;!#$%&/()=?¿-_[]+-*@";

let passwordSeed = "";

let useUpperCase = false
let useLowerCase = false
let useNumbers = false
let useSpecialCharacters = false

// Write password to the #password input

var generatePassword = function () {
}


function writePassword() {
  var numChar = window.prompt("How many characters do you want?");
  useUpperCase = window.confirm("Do you want to include Uppercase?");
  useLowerCase = window.confirm("Do you want to include Lowercase?");
  useNumbers = window.confirm("Do you want to include Numbers?");
  useSpecialCharacters = window.confirm("Do you want to include Special Characters?");

  if(useUpperCase){
    passwordSeed += uppercase;
  }

  if(useLowerCase){
    passwordSeed += lowercase;
  }

  if(useNumbers){
    passwordSeed += numbers;
  }

  if(useSpecialCharacters){
    passwordSeed += specialCharacters;
  }

  console.log(passwordSeed)
  length = numChar;

  var password = generatePassword();
  var password = ""
  for (var i = 0; i < length; i++) {
    passwordText = Math.floor(Math.random() * passwordSeed.length);
    password += passwordSeed.charAt(passwordText);
  }
  passwordTextArea.value = password;
  passwordSeed = ""
}

// Add event listener to generate button
generateBtn.addEventListener("click", function () { writePassword(length) });
