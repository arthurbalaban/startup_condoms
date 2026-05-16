document.addEventListener('DOMContentLoaded', () => {
    const sloganElement = document.getElementById('slogan_anim');
    if (!sloganElement) return;

    const text = sloganElement.textContent.trim();
    const words = text.split(' ');

    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const animateSlogan = () => {
        // phase 1: Afficher les mots un par un
        let currentIndex = 0;
        sloganElement.textContent = '';

        const displayNextWord = () => {
            if (currentIndex < words.length) { // tant qu'il reste des mots
                sloganElement.textContent += (currentIndex > 0 ? ' ' : '') + words[currentIndex]; //contient le innerHTML
                currentIndex++;
                setTimeout(displayNextWord, 1000);
            } else {
                // après une seconde on fait le mouvement
                setTimeout(() => {
                    animateMovement();
                }, 1000);
            }
        };

        displayNextWord();
    };

    const animateMovement = () => {
        // phase 2: bouger à droite
        sloganElement.classList.add('move-right');
        setTimeout(() => {
            sloganElement.classList.remove('move-right');
            sloganElement.classList.add('move-left');
            
            // phase 3 : revenir à l'emplacement de base
            setTimeout(() => {
                sloganElement.classList.remove('move-left');
                
                sloganElement.style.color = getRandomColor(); // phase 4: changer de couleur
                setTimeout(() => { // wait 1 sec
                    animateSlogan();
                }, 1000);
            }, 1000);
        }, 1000);
    };

    // Démarrer l'animation
    animateSlogan();
});
