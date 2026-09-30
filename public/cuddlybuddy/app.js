// --- SIGN UP LOGIC ---
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;
        const confirm = document.getElementById('confirmPassword').value;

        if (password !== confirm) {
            alert("Passwords do not match!");
            return;
        }

        // Kunin ang users sa browser memory
        let users = JSON.parse(localStorage.getItem('users')) || [];

        if (users.find(u => u.email === email)) {
            alert("Email already registered!");
            return;
        }

        // I-save ang bagong user
        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Account created successfully! You can now Sign In.");
        window.location.href = "CuddlyBuddy.html"; 
    });
}

// --- SIGN IN LOGIC ---
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert("Login Successful!");
            window.location.href = "home.html";
        } else {
            alert("Invalid email or password!");
        }
    });
}

// --- SOCIAL BUTTONS ---
const googleBtn = document.getElementById('googleLogin');
const facebookBtn = document.getElementById('facebookLogin');

if (googleBtn) {
    googleBtn.onclick = () => {
        alert("Google Login Successful!");
        window.location.href = "home.html";
    };
}
if (facebookBtn) {
    facebookBtn.onclick = () => {
        alert("Facebook Login Successful!");
        window.location.href = "home.html";
    };
}