document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Abyss","The Dumbass","An Idiot"];
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
    var texts = ["  ","I am Abyss","Im a dumbass","Will Update.","Until Next Update Love ♥"];
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
document.addEventListener("DOMContentLoaded", function() {
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12 || 12;

        const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
        clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
});
document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Loneliness.", "Hate.","Isolated.","Sonder.","Chrysalism.","Monachopsis.","Lachesism.","Liberosis.","Drowning."];
    var changingText = document.getElementById("changing-Footer");
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
    var texts = ["16","Idiot","I keep getting sidetracked","I've made too many mistakes.","I just need a friend.","Please."];
    var changingText = document.getElementById("changing-text-3");
    var counter = 0;
    var currentText = "";
    var isDeleting = false;
    var typingSpeed = 200; // Adjust typing speed (in milliseconds)

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
            setTimeout(typeText, 7500); // Pause before starting to delete
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
    var texts = ["Abyss.", "I Tend To Run Away From Things I Love."];
    var changingText = document.getElementById("End");
    var counter = 0;
    var currentText = "";
    var isDeleting = false;
    var typingSpeed = 1500; // Adjust typing speed (in milliseconds)

    function typeText() {
        var text = texts[counter];

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
function typeTitle(title, delay = 100) {
    let index = 0;
    let titleText = document.title;
    document.title = '';

    function type() {
        if (index < title.length) {
            document.title += title.charAt(index);
            index++;
            setTimeout(type, delay);
        } else {
            setTimeout(appearTitle, delay * 3); // Wait before appearing
        }
    }

    type();
}

// Example usage
typeTitle('I Trust You Enough.', 250); // Adjust the delay (in milliseconds) as needed