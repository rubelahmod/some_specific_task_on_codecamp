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


