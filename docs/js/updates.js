// updates.js

document.addEventListener('DOMContentLoaded', function () {
    const updates = document.querySelectorAll('.update');
    const infoCard = document.querySelector('.info-card');

    document.addEventListener('mousemove', function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;

        infoCard.style.top = `${mouseY}px`;
        infoCard.style.left = `${mouseX}px`;
    });

    updates.forEach(update => {
        update.addEventListener('mouseenter', function (event) {
            // Set the content of the info-card
            document.getElementById('info-title').textContent = update.querySelector('h2').textContent;
            document.getElementById('info-content').textContent = update.querySelector('.update-content').textContent;

            // Show the info-card
            infoCard.style.display = 'block';
        });

        update.addEventListener('mouseleave', function () {
            // Hide the info-card when leaving the update
            infoCard.style.display = 'none';
        });
    });
});
