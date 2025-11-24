document.addEventListener('DOMContentLoaded',function(){
const generateButton = document.getElementById('generateButton');
const ingredients = document.querySelectorAll('#ingredientsList li');
const spellArea = document.getElementById('spellArea');
const resestButton = document.getElementById('resetButton')

function generateSpell(){
    const randomIndex = Math.floor(Math.random() *ingredients.length);
    const randomIngredient = ingredients[randomIndex].textContent;
    spellArea.innerHTML = `<h2>${randomIngredient}</h2>`;
}
function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g},${b})`;
}

function changeSpellColor(){
    spellArea.style.backgroundColor = getRandomColor();
}

function countdown(){
    let countdown = 3;
    generateButton.disabled = true;
    spellArea.innerHTML = `<h2>${countdown}</h2>`;

    const countdownInterval =setInterval(()=>{
        countdown--;
        spellArea.innerHTML = `<h2>${countdown}</h2>`;

        if(countdown === 0){
            clearInterval(countdownInterval);
            generateSpell();
            changeSpellColor();
            generateButton.disabled = false;
        }
    },1000);
}

function reset(){
    spellArea.innerHTML = '<h2>Spell Area</h2>';
    spellArea.style.backgroundColor = '';
}

reset();
generateButton.addEventListener('click', countdown);
resestButton.addEventListener('click',reset)
  
});