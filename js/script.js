function toggle(button) {
    var password = document.getElementById("password");
    if (password.type == "password") {
        button.innerHTML = "Hide";
        password.type = "text";
    }
    else {
        button.innerHTML = "Show";
        password.type = "password";
    }
}

/* Code snippet from: https://stackoverflow.com/questions/43390966/javascript-show-hide-toggle-button-for-password-field */