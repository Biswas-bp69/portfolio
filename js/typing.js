
const textElement = document.getElementById("text");
const cursor = document.getElementById("cursor");

// HTML content store गरेर clear गर्नु
const fullHTML = textElement.innerHTML;
textElement.innerHTML = "";

let i = 0;

// Smooth typing function for HTML content
function typeHTML() {
  if (i < fullHTML.length) {
    // Add one character at a time
    textElement.innerHTML += fullHTML.charAt(i);
    i++;
    setTimeout(typeHTML, 35); // speed control
  } else {
    // Typing finished, hide cursor
    cursor.style.display = "none";
  }
}

typeHTML();
