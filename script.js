const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a'); // Assuming menu items are <a> elements inside .nav-links

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

menuItems.forEach(item => {
    item.onclick = () => {
        navLinks.classList.remove('active'); // Close the menu when a menu item is clicked
    };
});
// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!navLinks.contains(event.target) && !menuIcon.contains(event.target)) {
        navLinks.classList.remove('active');
    }
});
document.getElementById('submit-button').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const emailMessage = document.getElementById('email-message');

    // Clear any previous message
    emailMessage.innerText = '';
    emailMessage.classList.remove('success');
    emailMessage.classList.remove('error');
    emailMessage.style.display = 'none';

    if (!email) {
        emailMessage.innerText = 'Please enter your email address.';
        emailMessage.classList.add('error');
        emailMessage.style.display = 'block';
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        emailMessage.innerText = 'Please enter a valid email address.';
        emailMessage.classList.add('error');
        emailMessage.style.display = 'block';
        return;
    }

    // Success message
    emailMessage.innerText = 'Email submitted successfully!';
    emailMessage.classList.add('success');
    emailMessage.style.display = 'block';

    // Optionally, clear the input field here
    document.getElementById('email').value = '';
});
