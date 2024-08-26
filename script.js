function login() {
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const loginContainer = document.getElementById('loginContainer');
    const cardContainer = document.getElementById('cardContainer');
    const greeting = document.getElementById('greeting');

    if (userName.trim() !== '' && validateEmail(userEmail)) {
        greeting.textContent = `Hello, ${userName}! 🎈`;
        loginContainer.style.display = 'none';
        cardContainer.style.display = 'block';
    } else {
        alert('Please enter a valid name and email address.');
    }
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
