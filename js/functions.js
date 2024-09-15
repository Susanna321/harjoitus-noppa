'use strict'

//Funktio satunnaisluvun arpomiseen
const rollDice = () => {
    return Math.floor(Math.random() * 6) + 1
};

//Päivittää nopan kuvan
const updateDiceImage = () => {
    const diceRoll = rollDice() //Arvotaan luku
    const diceImage =document.getElementById('diceImage') //Haetaan nopan kuva
    //Päivitetään kuva vastaamaan lukua
    diceImage.src= `./kuvat/${diceRoll}.png`
}

document.getElementById('dice').addEventListener('click', updateDiceImage)