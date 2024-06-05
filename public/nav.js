document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = 'gold'; // Change this color as needed
        });
        link.addEventListener('mouseout', () => {
            link.style.color = ''; // Revert to the original color
        });
    });
});
