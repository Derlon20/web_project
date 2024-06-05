document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.getElementById('signupButton');
    const usernameLoginInput = document.getElementById('usernamelogin');
    const passwordLoginInput = document.getElementById('passwordlogin');
    const usernameSignupInput = document.getElementById('username');
    const passwordSignupInput = document.getElementById('password');
    const repeatPasswordSignupInput = document.getElementById('repeatPassword');

    loginButton.addEventListener('click', () => {
        handleLogin();
    });

    signupButton.addEventListener('click', () => {
        handleSignup();
    });

    function handleLogin() {
        const username = usernameLoginInput.value;
        const password = passwordLoginInput.value;

        const predefinedUsername = 'user';
        const predefinedPassword = '1234';

        const usernameError = document.getElementById('usernameError');
        const passwordError = document.getElementById('passwordError');

        usernameError.textContent = '';
        passwordError.textContent = '';

        if (username === predefinedUsername && password === predefinedPassword) {
            alert('Login successful!');
        } else {
            if (username !== predefinedUsername ||  password !== predefinedPassword) {
                usernameError.textContent = 'Incorrect username or password.';
            }
        }
    }

    function handleSignup() {
        const username = usernameSignupInput.value;
        const password = passwordSignupInput.value;
        const repeatPassword = repeatPasswordSignupInput.value;

        if (password !== repeatPassword) {
            alert('Passwords do not match.');
        } else {
            alert('Signup successful!');
        }
    }
});
