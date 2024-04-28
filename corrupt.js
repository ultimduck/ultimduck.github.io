
// Refresh the page when right-click is detected
document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevent the default context menu
    location.reload(); // Reload the page
});

// Refresh the page when Ctrl+Shift+I is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault(); // Prevent the default action (opening developer tools)
        location.reload(); // Reload the page
    }
});

// Refresh the page when Ctrl+U is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault(); // Prevent the default action (viewing page source)
        location.reload(); // Reload the page
    }
});
// Refresh the page when Ctrl or F12 is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.key === "F12") {
        event.preventDefault(); // Prevent the default action
        location.reload(); // Reload the page
    }
});