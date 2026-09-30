document.addEventListener('DOMContentLoaded', () => {

    const loginForm = document.getElementById('loginForm');

    if (loginForm) {

        loginForm.addEventListener('submit', function(e) {

            e.preventDefault();

            const email = loginForm.querySelector('input[type="email"]').value;

            const password = loginForm.querySelector('input[type="password"]').value;

            if (email && password) {

                console.log("Logging in with:", email);

                alert("Welcome to CuddlyBuddy! Logging in...");

            } else {

                alert("Please fill in all fields.");

            }

        });

    }

    const googleBtn = document.querySelector('.google-btn');

    const fbBtn = document.querySelector('.fb-btn');

    if (googleBtn) {

        googleBtn.addEventListener('click', () => {

            alert("Connecting to Google Account...");

        });

    }

    if (fbBtn) {

        fbBtn.addEventListener('click', () => {

            alert("Connecting to Facebook Account...");

        });

    }

});