// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Enter the desired length of your password. Note: It must be more than 8 characters.")

  passwordLength = checkPasswordIsNotEmptyString(passwordLength);
  passwordLength = checkPasswordLengthIsCorrect(passwordLength)


  var confirmUpperCase = confirm("Do you want to include uppercase letters in your passwords?")
  var confirmLowerCase = confirm("Do  you want to include lower case letters in your password?")
  var confirmNumbers = confirm("Do you want to include numbers in your password?")
  var confirmSC = confirm("Do you wnat to include speacial characters in your password?")
  
  var listOfCharacters = ""
  //Create checkboxes formatting Capitol letters, lowercase letters, numbers, and special characters
  if (confirmUpperCase) {
    listOfCharacters= listOfCharacters + 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  } 
  
  if (confirmLowerCase) {
    listOfCharacters= listOfCharacters + 'abcdefghijklmnopqrstuvwxyz'
  } 
  
  if (confirmNumbers) {
    listOfCharacters = listOfCharacters + "1234567890"
  } 
  
  if (confirmSC) {
    listOfCharacters = listOfCharacters + "!@#$%^&*()?/><"
  } 

  if(!confirmLowerCase && !confirmNumbers && !confirmSC && !confirmUpperCase){
    alert("You need to choose at least one type of character in order to generate a password")
    window.location.reload()
  }


  var finalPassword = ""
  for(let i=0; i < passwordLength; i++) {
    finalPassword = finalPassword + listOfCharacters.charAt(Math.floor(Math.random() * listOfCharacters.length));
  }
    
  return finalPassword
}

function checkPasswordIsNotEmptyString(passwordLength) {
  while(passwordLength == "") {
    passwordLength = prompt("You must enter a value.")
  }

  return passwordLength;
}

function checkPasswordLengthIsCorrect(passwordLength) {
  while(Number.parseInt(passwordLength) < 8 || Number.parseInt(passwordLength) > 128 || passwordLength == ""){
    passwordLength = prompt("Password must be greater than 8 or less than 128 characters.")
  } 

  return passwordLength
}