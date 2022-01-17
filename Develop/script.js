// Assignment Code

//input variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//special characters
character = ["!", "@", "#", "$", "%", "&", "*","+", "_", "-"]

//numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9]

//alphabetical characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space is for the Uppercase conversion
space = [];

// Choices declared outside the if statement so they can be concatenated upon condition
var optns;
// converting letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
//variable for uppercase conversion
letters2 = letters.map(toUpper);

//password button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", function () {
  psw = generatePassword();
  document.getElementById("password").placeholder = psw;
});


//Function to generate PW - User is asked to choose a number
function generatePassword(){
  enter = window.prompt("How many characters would you like your password? Choose between 8 and 128");

//if user chooses "0" or "cancel", user will be alerted to chose a valid number
if (!enter){
  alert("Please choose a valid number & and Start Over!");
} 


else {
  confirmUppercase = confirm("Do you want uppercase letters?");
  confirmLowercase = confirm("Do you want lowercase letters?");
  confirmNumber = confirm("Do you want numbers?");
  confirmCharacter = confirm("Do you want to include special characters?");
  
};

//if user chooses all the criteria: 4 positive selections
if (confirmUppercase && confirmLowercase && confirmNumber && confirmCharacter) {
  optns = character.concat(letters, letters2, number);
  }

//if user chooses none of the criteria: 4 negative selections

else if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmCharacter) {
   optns = alert("You Must choose a criteria to generate a safe password. Please start over.")
}

//if user selects 3 of the criteria
else if (confirmCharacter && confirmLowercase && confirmNumber) {
  optns = character.concat(letters, number);
}
else if (confirmCharacter && confirmUppercase && confirmNumber) {
  optns = character.concat(letters2, number);
}
else if (confirmCharacter && confirmLowercase && confirmUppercase) {
  optns = character.concat(letters, letters2);
}
else if (confirmNumber && confirmUppercase && confirmLowercase) {
  optns = number.concat(letters2, letters);
}


//if user selects 2 of the criteria
else if (confirmCharacter && confirmLowercase) {
  optns = character.concat(letters);
}
else if (confirmCharacter && confirmUppercase) {
  optns = character.concat(letters2);
}
else if (confirmCharacter && confirmNumber) {
  optns = character.concat(number);
}
else if (confirmNumber && confirmUppercase) {
  optns = number.concat(letters2);
}
else if (confirmLowercase && confirmNumber) {
optns = letters.concat(number);
}
else if (confirmNumber && confirmLowercase) {
  optns = number.concat(letters);
}
else if (confirmLowercase && confirmUppercase) {
  optns = letters.concat(letters2);
}

//if user selects 1 of the criteria
else if (confirmNumeber){
  optns = number;
}
else if (confirmCharacter) {
  optns = character;
}
else if (confirmUppercase) {
  optns = (letters2);
}
else if (confirmLowercase) {
  optns = letters;
}

var password = []

//Start forloop: random selection of variables
for (var i = 0; i < enter; i++) {
  var pickOptns  = optns[Math.floor(Math.random() * optns.length)];
  password.push(pickOptns);
}

var psw = password.join("");
UserInput(psw);
return psw;
}


//Password is provided to user in the dedicated box
function UserInput(psw) {
  document.getElementById("password").textContent = psw;
}




