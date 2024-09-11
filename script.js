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
