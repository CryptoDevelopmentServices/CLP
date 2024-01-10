document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeStyle = document.getElementById('theme-style');

    // Check user's preference from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        themeToggle.checked = true;
        themeStyle.href = 'CSS/dark-mode.css'; // Link to your dark mode CSS file
    }

    // Toggle between light and dark mode
    themeToggle.addEventListener('change', function() {
        if (themeToggle.checked) {
            themeStyle.href = 'CSS/dark-mode.css'; // Link to your dark mode CSS file
            localStorage.setItem('theme', 'dark');
        } else {
            themeStyle.href = 'CSS/light-mode.css'; // Link to your light mode CSS file
            localStorage.setItem('theme', 'light');
        }
    });
});
