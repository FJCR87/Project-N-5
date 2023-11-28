// First things to do it´s create the varibles for the Password Generator. First I created object with all variable to be used into the funtion. 
// I create a variable which combine all the optional varible include for the password generator and the function for the password generato 

const keys = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    symbol: "@#$%^&*()_+~|}{[]></-="
  }
  const getKey = [
    function upperCase() {
      return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
    },
    function lowerCase() {
      return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
    },
    function number() {
      return keys.number[Math.floor(Math.random() * keys.number.length)];
    },
    function symbol() {
      return keys.symbol[Math.floor(Math.random() * keys.symbol.length)];
    }
  ];
  
// I created the function to run the password generator with the links from characters prompt.
// I use the while loop to be the more stong for this project also I use the Math Floor function for the password generator.

  function createPassword() {
    const upper = document.getElementById("upperCase").checked;
    const lower = document.getElementById("lowerCase").checked;
    const number = document.getElementById("number").checked;
    const symbol = document.getElementById("symbol").checked;
  
    const passwordBox = document.getElementById("passwordBox");
    const length = document.getElementById("length");
    let password = "";
    while (length.value > password.length) {
      let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
      let isChecked = document.getElementById(keyToAdd.name).checked;
      if (isChecked) {
        password += keyToAdd();
      }
    }
    passwordBox.innerHTML = password;
  }

  // On this section I created copy funcionaly to the Copy button.

  function copyPassword() {
    const textarea = document.createElement('textarea');
    const password = document.getElementById("passwordBox").innerText;
    if (!password) { return; }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
  }