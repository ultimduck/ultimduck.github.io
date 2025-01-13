document.addEventListener("DOMContentLoaded", function () {
    const typingContainer = document.getElementById("typing-container");
    const loadingAnimation = document.getElementById("loading-animation");
    const proceedButton = document.getElementById("proceed-button");

    // Boot-up lines
    const lines = [
        "Initializing system...",
        "Loading core components...",
        "Authenticating user...",
        "Boot-up complete.",
        "Welcome Guest."
    ];

    let currentLine = 0;
    let currentChar = 0;

    // Loading spinner sequence
    const spinnerFrames = ["-", "\\", "|", "/"];
    let spinnerIndex = 0;

    // Typing effect
    function typeText() {
        if (currentLine < lines.length) {
            const line = lines[currentLine];

            if (currentChar < line.length) {
                if (currentChar === 0) {
                    const newLine = document.createElement("div");
                    newLine.className = "typed-line";
                    typingContainer.appendChild(newLine);
                }

                typingContainer.lastChild.textContent += line[currentChar];
                currentChar++;
                setTimeout(typeText, 100); // Adjust typing speed
            } else {
                currentLine++;
                currentChar = 0;
                setTimeout(typeText, 500); // Pause before the next line
            }
        } else {
            startLoadingAnimation(); // Start spinner animation after typing
        }
    }

    // Spinner animation
    function startLoadingAnimation() {
        const spinnerInterval = setInterval(() => {
            loadingAnimation.textContent = `Loading ${spinnerFrames[spinnerIndex]}`;
            spinnerIndex = (spinnerIndex + 1) % spinnerFrames.length;
        }, 200);

        // Stop spinner and show the button after a delay
        setTimeout(() => {
            clearInterval(spinnerInterval);
            loadingAnimation.textContent = "Enter?";
            proceedButton.style.display = "inline-block"; // Show the button
        }, 5000); // Adjust delay before the button appears
    }

    // Start typing effect
    typeText();

    // Proceed button event listener
    proceedButton.addEventListener("click", () => {
        window.location.href = "Names.html"; // Redirect to the main page
    });
});
