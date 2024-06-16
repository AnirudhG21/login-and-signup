function togglePasswordVisibility(passwordId) {
    var passwordField = document.getElementById(passwordId);
    var toggleIcon = passwordField.nextElementSibling.querySelector('i');

    if (passwordField.type === "password") {
        passwordField.type = "text";
        toggleIcon.classList.remove("fa-eye");
        toggleIcon.classList.add("fa-eye-slash");
    } else {
        passwordField.type = "password";
        toggleIcon.classList.remove("fa-eye-slash");
        toggleIcon.classList.add("fa-eye");
    }
}

document.getElementById('show-signup').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('login-form').classList.add('hidden');
    document.getElementById('signup-form').classList.remove('hidden');
});

document.getElementById('show-login').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('signup-form').classList.add('hidden');
    document.getElementById('login-form').classList.remove('hidden');
});
