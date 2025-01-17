var isDisplaying = false; // Flag to track if displayWebsite is already running
var ab = "abyss."
var yo = "youko"
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
var EG = "3$5jk@ulmf.gg"
function displayWebsite() {
    if (isDisplaying) {
        return; // If already displaying, do nothing
    }

    isDisplaying = true; // Set flag to true to indicate displayWebsite is running
    var name = document.getElementById('nameInput').value.toLowerCase();
    var notFoundMessage = document.getElementById('notFoundMessage');

    if (name === on) {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to '+ on +' In A New Tab.', notFoundMessage, function() {
                setTimeout(function() {
                    // window.location.href = './friend.html';
                    window.open('./friend', '_blank'); // Open in new tab
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === ab) {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to '+ab, notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './Abyss';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === yo) {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to '+yo, notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './youko';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    }
    else if (name === il) {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to '+il, notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './Friends';
                }, 3000); // Redirect delay
                isDisplaying = false; // Reset flag after function is done
            });
        });
    } else if (name === 'j3r65p') {
        typeText('> Name Found.', notFoundMessage, function() {
            typeText('> File Corrupted.', notFoundMessage, function() {
                typeText('> Attempting Restoration...', notFoundMessage, function() {
                    setTimeout(function() {
                        window.open('./Corrupted', '_blank');
                        typeText('> File Failed To Restore.', notFoundMessage, function() {});
                    }, 3000);// Redirect delay
                    isDisplaying = false; // Reset flag after function is done
                });
                typeText('> 3$5jk..', notFoundMessage, function() {});
            });
            typeText('> Help.', notFoundMessage, function() {});
        });
    } else if (name === EG) {
        typeText('> Name found.', notFoundMessage, function() {
            typeText('> Going to '+EG+'.', notFoundMessage, function() {
                setTimeout(function() {
                    window.location.href = './EG';
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
var on = "onswix"
document.getElementById('nameInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        displayWebsite();
    }
});

var il = "i love them."
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
// Refresh the page when Ctrl or F12 is pressed
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey || event.key === "F12") {
        event.preventDefault(); // Prevent the default action
        location.reload(); // Reload the page
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var bootSound = document.getElementById('bootSound');
    bootSound.play();
});