// Assignment code here


//Setting up variables for password
var lowerCaseCharacter=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseCharacter=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberCharacter=['1','2','3','4','5','6','7','8','9','0'];
var specialCharacter="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

//get random character function
var getRandomLower = function(){
  return lowerCaseCharacter[Math.floor(Math.random()*lowerCaseCharacter.length)];
}
console.log (getRandomLower());

var getRandomUpper = function(){
  return upperCaseCharacter[Math.floor(Math.random()*upperCaseCharacter.length)];
}
console.log (getRandomUpper());

var getRandomNumber = function(){
  return numberCharacter[Math.floor(Math.random()*numberCharacter.length)];
}
console.log (getRandomNumber());

var getRandomSpecial = function(){
  return specialCharacter[Math.floor(Math.random()*specialCharacter.length)];
}
console.log (getRandomSpecial());

//Prompt to customize password
var generatePassword = function(){
  
  var finalPasswordChar=" ";
  var finalPassword ="";

  var passLength = window.prompt ("How long would your password be? Please pick a number between 8-128");
  passLength = parseInt (passLength);

  //Check number selected to see if within valid range
  if(passLength>128 || passLength<8){
    window.alert("Please pick a number between 8-128");
    generatePassword();
  }
  //Confirm password criteria
  else{
    var confirmLower = confirm ("Do you want lower case in your password?");
    var confirmUpper = confirm ("Do you want upper case in your password?");
    var confirmNumber = confirm ("Do you want number in your password?");
    var confirmSpecial = confirm ("Do you want special character in your password?");
      if(confirmLower|| confirmUpper|| confirmNumber|| confirmSpecial ){
        for(i = 0; i<passLength;i++){
        if (confirmLower){
          finalPasswordChar= finalPasswordChar+ getRandomLower();
        }
        if (confirmUpper){
          finalPasswordChar=finalPasswordChar+ getRandomUpper();
        }
        if (confirmNumber){
          finalPasswordChar=finalPasswordChar+getRandomNumber();
        }
        if (confirmSpecial){
          finalPasswordChar=finalPasswordChar+getRandomSpecial();
        }
      }}
      else{
        window.alert ("Please pick at least one criteria for your password. Try again please");
        generatePassword();
      }
    
  }
   //pick random character from finalPassChar
   var getFinalPassword = function(){
    return finalPasswordChar[Math.floor(Math.random()*finalPasswordChar.length)];
  }
  //generate correct desired password length
  for(j=0;j<passLength;j++){
    finalPassword=finalPassword+getFinalPassword();

  }
  
  return finalPassword;
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
