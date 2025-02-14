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
typeTitle('Misleading?-thought-so.', 250); // Adjust the delay (in milliseconds) as needed