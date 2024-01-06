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

function generatePassword(){
  var passwordLength = prompt("Enter the desired length of your password. Note: It must be more than 8 characters.")
  console.log("User entered this", passwordLength)
  
  let passwordLengthCriteria = false
  while(!passwordLengthCriteria){
    if (passwordLength == ""){
      passwordLength = prompt("You must enter a value.")
    }

    if (Number.parseInt(passwordLength) < 8 || Number.parseInt(passwordLength) > 128){
      passwordLength = prompt("Password must be greater than 8 or less than 128 characters.")
      passwordLengthCriteria = true;
    } 
  }
  
  
  
  //Make it so people cannot progress until entering a valid number

  var confirmCharacters = confirm("Select whether you would like to use uppercase letters, lowercase letters, numbers or special charatcers.")
  var listOfCharacters = ""
  //Create checkboxes formatting Capitol letters, lowercase letters, numbers, and special characters
  if (confirmCharacters) {
    listOfCharacters= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  } else {
    listOfCharacters= 'abcdefghijklmnopqrstuvwxyz0123456789'
  }
  

  var finalPassword = ""
  for(let i=0; i < passwordLength; i++) {
    finalPassword += listOfCharacters.charAt(Math.floor(Math.random() * listOfCharacters.length));
  }
    
  return finalPassword
}