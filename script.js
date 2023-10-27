// Get elements by their IDs
var textElement = document.getElementById("myElement");
var changeTextButton = document.getElementById("changeTextButton");
var changeHTMLButton = document.getElementById("changeHTMLButton");
var appendElementButton = document.getElementById("appendElementButton");
var removeElementButton = document.getElementById("removeElementButton");
var imgElement = document.getElementById("myImage");
var linkElement = document.getElementById("myLink");

// Change text content when the button is clicked
changeTextButton.addEventListener("click", function () {
  textElement.textContent = "New Text Content";
});

// Change HTML content when the button is clicked
changeHTMLButton.addEventListener("click", function () {
  textElement.innerHTML = "<strong>New HTML Content</strong>";
});

// Append a new paragraph element
appendElementButton.addEventListener("click", function () {
  var newElement = document.createElement("p");
  newElement.textContent = "This is a new paragraph.";
  textElement.appendChild(newElement);
});

// Remove the paragraph element
removeElementButton.addEventListener("click", function () {
  var elementToRemove = document.querySelector("p");
  if (elementToRemove && elementToRemove.parentElement) {
    elementToRemove.parentElement.removeChild(elementToRemove);
  }
});

// Change the image source attribute
imgElement.addEventListener("click", function () {
  imgElement.setAttribute("src", "new-image.jpg");
});

// Remove the link's href attribute
linkElement.addEventListener("click", function () {
  linkElement.removeAttribute("href");
});
