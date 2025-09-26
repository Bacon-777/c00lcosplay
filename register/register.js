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

        if (username.length < 6) {
            document.getElementById("usernameError").textContent = "Username must have 6-18 characters.";
        } else if (password.length < 8 || !password.match(lowerCaseLetter) || !password.match(upperCaseLetter) || !password.match(numbers)) {
            document.getElementById("passwordError").textContent = "Unsafe password. Please try another one";
        } else if (confirm_password == passwords) {
            document.getElementById("passwordError").textContent = "Invalid confirmation";
        } else {
            if (localStorage.getItem("users")) {
                let users = JSON.parse(localStorage.getItem("users"));
                users.push({
                    username,
                    password,
                });
                localStorage.setItem("users", JSON.stringify(users));
            } else {
                localStorage.setItem(
                    "users",
                    JSON.stringify([
                        {
                            password,
                            username,
                        }
                    ])
                )
            }
        }
    });
});