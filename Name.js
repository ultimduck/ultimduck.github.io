// CURRENT NAMES: ONSWIX, ABYSS., AYA, JHINX, empty. 


var isDisplaying = false; // Flag to track if displayWebsite is already running

function typeText(text, element, callback) {
    var currentText = '';
    var index = 0;
    var deleting = false;
    var cursor = document.createElement('span');
    cursor.className = 'blink';
    cursor.textContent = '_';

    function type() {
        if (!deleting && index < text.length) {
            currentText += text.charAt(index);
            element.textContent = currentText;
            element.appendChild(cursor);
            index++;
            setTimeout(type, 100); // Typing speed
        } else if (deleting && currentText.length > 0) {
            currentText = currentText.slice(0, -1);
            element.textContent = currentText;
            element.appendChild(cursor);
            setTimeout(type, 50); // Deleting speed
        } else if (!deleting && currentText.length === text.length) {
            deleting = true;
            setTimeout(function() {
                deleting = false;
                if (callback) {
                    callback();
                }
            }, 1000); // Delay before showing "Going to website"
        } else {
            if (callback) {
                callback();
            }
        }
    }

    type();
}

function displayWebsite() {
    if (isDisplaying) {
        return; // If already displaying, do nothing
    }

    isDisplaying = true; // Set flag to true to indicate displayWebsite is running
    var name = document.getElementById('nameInput').value.toLowerCase();
    var notFoundMessage = document.getElementById('notFoundMessage');

    if (name === 'onswix') {
        typeText('Name found.', notFoundMessage, function() {
            typeText('> Going to Onswix In A New Tab.', notFoundMessage, function() {
                setTimeout(function() {
                    // window.location.href = './friend.html';
                    window.open('./friend', '_blank'); // Open in new tab
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === 'abyss.') {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to Abyss.', notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './Abyss';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === 'aya') {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to Aya.', notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './aya';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === 'jhinx') {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to Jhinx.', notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './jhinx';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else {
        typeText('> Name not found.', notFoundMessage, function() {
            setTimeout(function() {
                typeText('> Going To Not_Found.', notFoundMessage, function() {
                    setTimeout(function() {
                        window.location.href = './Not_Found';
                        // window.open('./Not_Found.html', '_blank'); // Open in new tab
                    }, 3000); // Redirect delay
                });
            }, 2000); // Delay before deleting "Name not found."
        });
    }
}

document.getElementById('nameInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        displayWebsite();
    }
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
typeTitle('Enter_Name...', 250); // Adjust the delay (in milliseconds) as needed

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
// Refresh the page when Ctrl is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey) {
        event.preventDefault(); // Prevent the default action
        location.reload(); // Reload the page
    }
});