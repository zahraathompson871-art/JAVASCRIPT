const loginForm = document.getElementById('login-form');
const username = document.getElementById('uname');
const password = document.getElementById('pwd');
const errorModal = document.querySelector('.modal');
const toggleButton = document.querySelector('.btn-toggle-nav')
const sidebar = document.querySelector('.nav-sidebar')
const sidebarUL =sidebar.querySelector('ul')

errorModal.style.display = 'none';

function validateLogin(event){
    event.preventDefault();

    if(username.value === 'admin' && password.value === 'password123'){
        window.location.href = 'index.html';
    }else{
        showModal();
    }
}

function showModal(){
    errorModal.style.display = 'block';
}

function dismissModal(){
    errorModal.style.display = 'none';
}

function toggleNav(){
    if(sidebarUL.style.visibility === 'visible'){
        sidebarUL.style.visibility = 'hidden';
        sidebar.style.width = '50px';
    }else{
        sidebarUL.style.visibility = 'visible';
        sidebar.style.width = '272px';
    }

    toggleButton.style.transform = toggleButton.style.transform === 'rotate(90deg)' ? 'rotate(0deg)' : 'rotate(90deg)';
    
}