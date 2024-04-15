let myImage = document.querySelector('img');

myImage.onclick = function() {
let mySrc = myImage.getAttribute('src');
if(mySrc === 'images/firefox-icon.png') {
myImage.setAttribute('src', 'img/d.jpg');
} else {

myImage.setAttribute('src', 'img/de.jpg');

}

}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hi!, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Nice to meet you, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}