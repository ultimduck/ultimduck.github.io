document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Abyss", "The Dumbass", "An Idiot"];
    const changingText = document.getElementById("changing-text");
    let counter = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)

    function typeText() {
        const text = texts[counter];

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
    const changingText = document.getElementById("changing-text-2");
    const texts = ["  ", "I am Abyss", "Im a dumbass", "Will Update.", "Until Next Update Love ♥"];
    let counter = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)

    function typeText() {
        const text = texts[counter];

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
document.addEventListener("DOMContentLoaded", function() {
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12 || 12;

        clockElement.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    }
    setInterval(updateClock, 1000);
    updateClock();
});
document.addEventListener("DOMContentLoaded", function() {
    const texts = ["Friends", "Hugs", "love"];
    const changingText = document.getElementById("changing-Footer");
    let counter = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 100; // Adjust typing speed (in milliseconds)

    function typeText() {
        const text = texts[counter];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
        } else {
            currentText = text.substring(0, currentText.length + 1);
        }

        changingText.innerHTML = currentText + '<span class="blink">|</span>'; // Add a blinking cursor

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 4000); // Pause before starting to delete
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
    const texts = ["16", "Coding Idiot", "How The FUCK do i fix that???"];
    const changingText = document.getElementById("changing-text-3");
    let counter = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 200; // Adjust typing speed (in milliseconds)

    function typeText() {
        const text = texts[counter];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
        } else {
            currentText = text.substring(0, currentText.length + 1);
        }

        changingText.innerHTML = currentText + '<span class="blink">|</span>'; // Add a blinking cursor

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 9000); // Pause before starting to delete
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
    const texts = ["Abyss.", "I Tend To Run Away From Things I Love."];
    const changingText = document.getElementById("End");
    let counter = 0;
    let currentText = "";
    let isDeleting = false;
    const typingSpeed = 1500; // Adjust typing speed (in milliseconds)

    function typeText() {
        const text = texts[counter];

        if (isDeleting) {
            currentText = text.substring(0, currentText.length - 1);
        } else {
            currentText = text.substring(0, currentText.length + 1);
        }

        changingText.innerHTML = currentText;

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 300000); // Pause before starting to delete
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