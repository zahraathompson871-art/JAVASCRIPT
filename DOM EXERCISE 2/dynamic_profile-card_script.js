document.addEventListener('DOMContentLoaded',function(){
const updateNameBtn=document.getElementById('updateNameBtn')
const profileName=document.getElementById('profileName')
const updateRoleBtn=document.getElementById('updateRoleBtn')
const profileRole=document.getElementById('profileRole')
const toggleStatusBtn=document.getElementById('toggleStatusBtn')
const profileCard=document.getElementById('profileCard')
const changeImageBtn=document.getElementById('changeImageBtn')
const profileImage=document.getElementById('profileImage')


function updateName(){
let name = prompt("Enter your name");
profileName.innerHTML = `<h2>${name}</h2>`;
};
updateNameBtn.addEventListener('click', updateName);


function updateRole(){
let role = prompt("Enter your role");
profileRole.innerHTML = `<p>${role}</p>`;
};
updateRoleBtn.addEventListener('click', updateRole);


function toggleStatus(){
    profileCard.classList.toggle('active-status')
};
toggleStatusBtn.addEventListener('click',toggleStatus);

function changeImg(){
    let img = prompt("Paste url for image");

    if(img){
    profileImage.src = img;
    }
};

changeImageBtn.addEventListener('click',changeImg);

});