const   signinBtn =  document.querySelector('.signinBtn');
const   signupBtn   =  document.querySelector('.signupBtn');
const   formBx   =  document.querySelector('.formBx');
const   body     =  document.querySelector('body');

           /* signinBtn.onclick = function(){
                formBx.classList.add('active');
                body.classList.add('active')
            }

            signinBtn.onclick = function(){
                formBx.classList.remove('active')
                body.classList.remove('active')
            }*/

signupBtn.addEventListener('click', () => {
    formBx.classList.add('active');
    body.classList.add('active')
})

signinBtn.addEventListener('click', () => {
    formBx.classList.remove('active')
    body.classList.remove('active')
})