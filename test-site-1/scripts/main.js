const myImage = document.querySelector('img');

myImage.onclick = () => {
    const mySrc =myImage.getAttribute('src');
    if (mySrc === 'images/elf.png') {
        myImage.setAttribute('src', 'images/elf2.png');
    } else {
        myImage.setAttribute('src', 'images/elf.png');        
    }    
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('Please enter your name');

    if (!myName) {
        setUserName();        
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = `my web tools, ${myName}`;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `my web tools, ${storedName}`;
}
myButton.onclick = () => {
    setUserName();
}