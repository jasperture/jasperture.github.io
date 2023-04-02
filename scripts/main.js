/*
let iceCream = "chocolate";
if (iceCream === "chocolate") {
  alert("Yay, I love chocolate ice cream!");
} else {
  alert("Awwww, but chocolate is my favorite…");
}
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
*/
const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/my-test-image.jpg") {
    myImage.setAttribute("src", "images/girl-image.jpg");
  } else {
    myImage.setAttribute("src", "images/my-test-image.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

const title = "An Experiment by User: ";

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = title + myName;
    }
}
  
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.innerHTML = title + storedName;
}
  
myButton.onclick = function() {
    setUserName();
}