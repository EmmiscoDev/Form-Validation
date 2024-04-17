//Errors
let error1 = document.getElementById('nameerror')
let passerror1 = document.getElementById('passerror')
let passerror2 = document.getElementById('pass2error')

//Inputs
let username = document.getElementById('uname')
let pass1 = document.getElementById('password1')
let email = document.getElementById('email')
let pass2 = document.getElementById('password2')
let phone = document.getElementById('phonenum')
let SubmitBtn = document.getElementById('formvalid')
SubmitBtn.addEventListener('submit', function submit(event){event.preventDefault()
    if(username.value == ''){
        error1.innerHTML = 'Enter username'
    }
    else if(username.value.length < 8){
        error.innerHTML = 'username must be more than 8 characters'
    }
    if(pass1.value == ''){
        passerror1.innerHTML = 'Enter password';
    }
    if(pass1.value != pass2.value){
        passerror2.innerHTML = 'Password does not match'
    }
    if(email.value == ''){
        emailerror.innerHTML = 'Enter valid email'
    }
    if(phone.value == ''){
        phoneError.innerHTML = 'Enter phone number'
    }
    else if(phone.value.length > 19){
        phoneError.innerHTML = 'Enter valid phone number'
    }

})