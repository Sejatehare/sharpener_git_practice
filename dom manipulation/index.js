const divs = document.getElementsByTagName("div");
const firstDiv = divs[0];
const secondDiv = divs[1];

const subheading = document.createElement("h3");
const subheadingText = document.createTextNode("Buy high quality organic fruits online");
subheading.appendChild(subheadingText);
firstDiv.appendChild(subheading);
subheading.style.fontStyle = "italic";

const para = document.createElement("p");
const paraText = document.createTextNode("Total fruits: 4");
para.appendChild(paraText);
para.id = "fruits-total";

const fruits = document.querySelector(".fruits");
secondDiv.insertBefore(para,fruits);
