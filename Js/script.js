const email = document.getElementById('email')
const errorMsg = document.getElementById('errorMsg')
const form = document.getElementById('form')
const bold = document.getElementById('bold')
const container = document.getElementById('container')
const containerTwo = document.getElementById('container-two')
const buttonTwo = document.getElementById('button-two')




function validate(event){
    event.preventDefault()


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(emailRegex.test(email.value));

    if(container.style.display = 'flex' && emailRegex.test(email.value) === false || email === '' || email === null){
        errorMsg.innerHTML  = 'Input a valid email address'
        container.style.display = 'flex';
        containerTwo.style.display = 'none'
        
        
    }
    else{
        containerTwo.style.display = 'flex';
        container.style.display = 'none';
        errorMsg.innerHTML = ''
        bold.innerHTML = email.value
        
        
    }
    
    // bold.innerHTML =`${email.value}`
    
}


function dismiss(event){
    containerTwo.style.display = 'none';
    container.style.display = 'flex';

}