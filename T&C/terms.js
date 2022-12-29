console.log("Hello World");

let getPass = document.getElementById("inputPassword4");
let passMessage = document.getElementById("message");
let strength = document.getElementById("strength");

getPass.addEventListener('input', () => {
    if(getPass.value.length > 0){
      passMessage.style.display = 'block';
    }
    else{
      passMessage.style.display = 'none';
    }
    if(getPass.value.length < 4){
      strength.innerHTML = ' weak';
      getPass.style.background = 'rgba(250, 91, 5, .4)';
      passMessage.style.color = '#fa5f05';
    }
    else if(getPass.value.length >= 7 && getPass.value.length < 11){
      strength.innerHTML = ' strong';
      getPass.style.background = 'rgba(225, 250, 5, .5)';
      passMessage.style.color = '#e1fa05';
    }

    else if(getPass.value.length >= 11){
      strength.innerHTML = ' Extreme';
      getPass.style.background = 'rgba(0, 250, 37, .7)';
      passMessage.style.color = '#00fa25';
    }


})

let getPassTwo = document.getElementById("inputPassword5");
let passMessageTwo = document.getElementById("messageTwo");
let strengthTwo = document.getElementById("strengthTwo");

getPassTwo.addEventListener('input', () => {
    if(getPassTwo.value.length > 0){
      passMessageTwo.style.display = 'block';
    }
    else{
      passMessageTwo.style.display = 'none';
    }
    if(getPassTwo.value.length < 4){
      strengthTwo.innerHTML = ' weak';
      getPassTwo.style.background = 'rgba(250, 91, 5, .4)';
      passMessageTwo.style.color = '#fa5f05';
    }
    else if(getPassTwo.value.length >= 7 && getPassTwo.value.length < 11){
      strengthTwo.innerHTML = ' strong';
      getPassTwo.style.background = 'rgba(225, 250, 5, .5)';
      passMessageTwo.style.color = '#e1fa05';
    }

    else if(getPassTwo.value.length >= 11){
      strengthTwo.innerHTML = ' Extreme';
      getPassTwo.style.background = 'rgba(0, 250, 37, .7)';
      passMessageTwo.style.color = '#00fa25';
    }


})