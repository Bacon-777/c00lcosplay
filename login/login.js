document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const lowerCaseLetter = /[a-z]/g;
        const upperCaseLetter = /[A-Z]/g;
        const numbers = /[0-9]/g;

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let confirm_password = document.getElementById("confirm_pass").value;

    });
});