document.addEventListener("DOMContentLoaded", function () {
  // Cloning Nodes Section
  var cloneButton = document.getElementById("cloneButton");
  cloneButton.addEventListener("click", function () {
    var originalElement = document.getElementById("originalElement");
    var clonedElement = originalElement.cloneNode(true);
    clonedElement.classList.add("element");
    cloningSection.appendChild(clonedElement);
  });

  // Replacing Nodes Section
  var replaceButton = document.getElementById("replaceButton");
  replaceButton.addEventListener("click", function () {
    var parentElement = document.getElementById("parentElement");
    var newElement = document.createElement("div");
    newElement.classList.add("element");
    newElement.textContent = "This is the new content.";
    parentElement.replaceWith(newElement);
  });

  // Combining Advanced Techniques Section
  var combineButton = document.getElementById("combineButton");
  combineButton.addEventListener("click", function () {
    var originalElement = document.getElementById("advancedElement");
    var clone = originalElement.cloneNode(true);
    clone.querySelector(".content").textContent = "Updated content";
    combiningSection.replaceWith(clone);
  });
});
