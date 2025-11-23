document.addEventListener('DOMContentLoaded',function(){
const generateButton = document.getElementById('generateButton');
const ingredients = document.querySelectorAll('#ingredientsList li');
const spellarea = document.getElementById('spellArea');

function generateSpell(){
    const randomIndex = Math.floor(Math.random() *ingredients.length);
    const randomIngredient = ingredients[randomIndex].textContent;
    spellarea.innerHTML = `<h2>${randomIngredient}</h2>`;
}
generateButton.addEventListener('click',generateSpell);
});