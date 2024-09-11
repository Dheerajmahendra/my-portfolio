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
document.getElementById('submit-button').addEventListener('click', function() {
    // Get the email input value
    const email = document.getElementById('email').value.trim();

    // Validate the email
    if (!email) {
        alert('Please enter your email address.');
        return;
    }

    // Check for valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Display success alert
    alert('Email submitted successfully!');

    // Optionally, clear the input field here
    document.getElementById('email').value = '';
});
