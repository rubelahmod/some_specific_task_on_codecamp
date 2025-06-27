alert("hey start now");
console.log("hello");
console.dir(document.body.childNodes[1]);

//// selecting by ID, class, tag
let heading= document.getElementById("heading");
console.dir(heading);

let headline= document.getElementsByClassName("headline");
console.dir(headline);
console.log(headline);

let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);
console.log(paragraph);



/// Query selector

//based on tag
let firstElements= document.querySelector("p");
console.dir(firstElements);
let allElements= document.querySelectorAll("p");
console.dir(allElements);

//based on class
let firstEle= document.querySelector(".headline");
console.dir(firstEle);
let allEle= document.querySelectorAll(".headline");
console.dir(allEle);

//based on id
let firstElem= document.querySelector("#heading");
console.dir(firstElem);
let allElem= document.querySelectorAll("#heading");
console.dir(allElem);



////// working with inner text
let div= document.querySelector("#frt");
console.dir(div);
console.log(div.innerText);

//// inner HTML
console.log(div.innerHTML);

///// textContent(can access hidden element)
let hidden = document.querySelector("#hidden");
console.dir(hidden);
console.dir(hidden.textContent);