var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ben2.jpg') {
      myImage.setAttribute ('src','images/ben3.jpg');
    } else {
      myImage.setAttribute ('src','images/ben2.jpg');
    }
}

var myHeading = document.querySelector('h1');
var myButton = document.getElementById('button');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Hi, ' + myName +' programming is nice';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Hi, ' + storedName +' programming is nice'
}
myButton.onclick = function() {
  setUserName();
}
