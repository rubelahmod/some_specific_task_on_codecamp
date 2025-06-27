const favoriteIcons = document.querySelectorAll('.favorite-icon');

favoriteIcons.forEach(icon => {
    icon.addEventListener('click', function() {
        this.classList.toggle('filled');
        if (this.classList.contains('filled')) {
            this.innerHTML = '&#10084;'; 
        } else {
            this.innerHTML = '&#9825;'; 
        }
    });
});