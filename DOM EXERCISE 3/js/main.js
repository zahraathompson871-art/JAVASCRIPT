const loginForm = document.getElementById('login-form');
const username = document.getElementById('uname');
const password = document.getElementById('pwd');
const errorModal = document.querySelector('.modal');
const toggleButton = document.querySelector('.btn-toggle-nav')
const sidebar = document.querySelector('.nav-sidebar')

errorModal.style.display = 'none';

function validateLogin(event){
    event.preventDefault();
    console.log("validateLogin function is running")

    if(username.value === 'admin' && password.value === 'password123'){
        window.location.href = 'index.html';
    }else{
        console.log("login failed -should show modal")
        showModal();
    }
}

function showModal(){
    console.log("showmodal is running")
    errorModal.style.display = 'block';
}

function hideModal(){
    errorModal.style.display = 'none';
}

errorModal.addEventListener('click',function(event){
    if(event.target === errorModal){
        hideModal();
    }
});

toggleButton.addEventListener('click',function(){
    sidebar.classList.toggle('sidebar-open');
    toggleButton.classList.toggle('rotated');
});