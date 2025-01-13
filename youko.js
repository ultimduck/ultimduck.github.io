document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Youko","Kise","Snowie","Rover","Zaq","Kariya"];
    var changingText = document.getElementById("changing-text");
    var counter = 0;
    var currentText = "";
    var isDeleting = false;
    var typingSpeed = 100; // Adjust typing speed (in milliseconds)

    function typeText() {
        var text = texts[counter];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
        } else {
            currentText = text.substring(0, currentText.length + 1);
        }

        changingText.innerHTML = currentText + '<span class="blink">|</span>'; // Add a blinking cursor

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 6000); // Pause before starting to delete
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            counter = (counter + 1) % texts.length;
            setTimeout(typeText, 500); // Pause before typing the next text
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); // Start the typing animation
});
document.addEventListener("DOMContentLoaded", function() {
    var changingText = document.getElementById("changing-text-2");
    var texts = [""];
    var counter = 0;
    var currentText = "";
    var isDeleting = false;
    var typingSpeed = 100; // Adjust typing speed (in milliseconds)

    function typeText() {
        var text = texts[counter];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
        } else {
            currentText = text.substring(0, currentText.length + 1);
        }

        changingText.innerHTML = currentText + '<span class="blink">|</span>'; // Add a blinking cursor

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 1200); // Pause before starting to delete
        } else if (isDeleting && currentText === "") {
            isDeleting = false;
            counter = (counter + 1) % texts.length;
            setTimeout(typeText, 100); // Pause before typing the next text
        } else {
            setTimeout(typeText, typingSpeed);
        }
    }

    typeText(); // Start the typing animation
});
// Define the lines to be typed
const lines = [
    "Hi rover :D",
    "I made this shit jus to show my appreciation for you",
    "Thank you for making my life so much better",
    "You always teach me the best shit",
    "Thank you for adopting me as a friend",
    "I dont really talk to you often since i genuinely",
    "Dont know how to keep most conversations going",
    "And i just really dont want to fuck up with you",
    "Thank you for always being there for me.",
    '"The Bestest Of Best Friends I Could Have Asked For."',
    "-Abyss."
];

// Select the container where the text will appear
const typingContainer = document.getElementById("typing-container");

let currentLine = 0; // Tracks the current line being typed
let currentChar = 0; // Tracks the current character in the line

function typeText() {
    if (currentLine < lines.length) {
        const line = lines[currentLine];

        // Check if we're still typing the current line
        if (currentChar < line.length) {
            // Create a new line element if this is the first character of the line
            if (currentChar === 0) {
                const newLine = document.createElement("div");
                newLine.className = "typed-line";
                typingContainer.appendChild(newLine);
            }

            // Add the next character to the current line
            typingContainer.lastChild.textContent += line[currentChar];
            currentChar++;
            setTimeout(typeText, 70); // Adjust typing speed here
        } else {
            // Move to the next line after completing the current one
            currentLine++;
            currentChar = 0;

            // Add a blinking cursor between lines
            const cursor = document.createElement("div");
            cursor.className = "blink";
            typingContainer.appendChild(cursor);

            setTimeout(() => {
                cursor.remove(); // Remove the cursor before starting the next line
                typeText();
            }, 500); // Adjust delay between lines here
        }
    }
}

// Start typing effect
typeText();
