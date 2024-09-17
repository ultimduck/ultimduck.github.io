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
typeTitle('Not_Found...', 250); // Adjust the delay (in milliseconds) as needed
document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Incorrect...","Who Are You..?","Leave me alone.","Don't Snoop Around Too Much."];
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

        changingText.innerHTML = currentText + '<span class="blink">_</span>'; // Add a blinking cursor

        // If typing is complete, toggle to deleting or move to the next text
        if (!isDeleting && currentText === text) {
            isDeleting = true;
            setTimeout(typeText, 2000); // Pause before starting to delete
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
    const clockElement = document.getElementById('clock');

    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const ampm = hours >= 12 ? 'pm' : 'am';

        hours = hours % 12 || 12;

        const timeString = `${hours}:${minutes} ${ampm}`;
        clockElement.textContent = timeString;
    }
    setInterval(updateClock, 1000);
    updateClock();
});