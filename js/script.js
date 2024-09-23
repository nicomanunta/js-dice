let rollButton = document.getElementById('rollButton');
let dice = document.getElementById('dice');

//aggiungo un evento click al bottone
rollButton.addEventListener('click', () => {
    dice.classList.add('roll');

    setTimeout(() => {
        let random = Math.floor(Math.random ()* 6) + 1;

        if (random === 1 ) {
            dice.style.backgroundImage = "url('img/1.png')";
        } else if (random === 2) {
            dice.style.backgroundImage = "url('img/2.png')";
        } else if (random === 3) {
            dice.style.backgroundImage = "url('img/3.png')";
        } else if (random === 4) {
            dice.style.backgroundImage = "url('img/4.png')";
        } else if (random === 5) {
            dice.style.backgroundImage = "url('img/5.png')";
        } else if (random === 6) {
            dice.style.backgroundImage = "url('img/6.png')";
        }

        dice.classList.remove('roll');
    }, 3050);
}) 
