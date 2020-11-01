// Assignment code here
function generatePassword() {
  // get length & check if is a number and is in the right range
  var length = window.prompt("What length do you want your password? (At least 8 and no more than 128)");
  if (length < 8 || length > 128 || isNaN(length)) {
    window.alert("Sorry you must enter a valid number. Try again.");
    return "Try again";
  }

  // init character values
  var upperCharacters = "";
  var lowerCharacters = "";
  var numberCharacters = "";
  var specialCharacters = "";

  // end result variable
  var key = "";

  // combine all accepted characters in array
  var validCharacters = [];


  // assign characters depending on response
  var upperCase = window.confirm("Include Uppercase?");
  if (upperCase) {
    upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    validCharacters.push(upperCharacters);
  } 

  var lowerCase = window.confirm("Include Lowercase?");
  if (lowerCase) {
    lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
    validCharacters.push(lowerCharacters);
  }

  var numbers = window.confirm("Include numbers?");
  if (numbers) {
    numberCharacters = "0123456789";
    validCharacters.push(numberCharacters);
  }

  var special = window.confirm("Include special characters?");
  if (special) {
    specialCharacters = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    validCharacters.push(specialCharacters);
  }
  
  // check for no criteria 
  if(!upperCase && !lowerCase && !numbers && !special) {
    window.alert("Sorry a criteria is needed. Try again.");
    return "Try again";
  } 

  // grab an equal amount of characters from each criteria
  var eachAmount = Math.ceil(length/validCharacters.length);
  var selectedCharacters = "";
  validCharacters.forEach(element => {
    for (var i = 0; i < eachAmount; i++) {
      selectedCharacters += element.charAt(Math.floor(Math.random() * element.length));
    }
  });

  // loop to randomize characters selected
  for ( var i = 0; i < length; i++ ) {
     key += selectedCharacters.charAt(Math.floor(Math.random() * length));
  }

  // return result variable
  return key;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
