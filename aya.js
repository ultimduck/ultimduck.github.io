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
typeTitle('Thank_You.', 250); // Adjust the delay (in milliseconds) as needed

document.addEventListener("DOMContentLoaded", function() {
    var texts = ["Hey, Aya.","thank you for everything.","I dont know how to show my appreciation...","so i made this just for your eyes to see.","Thank You So Much Aya.","Try Typing Jhinx Next Time",'Type "Abyss." with the dot into the search to see my site.'];
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