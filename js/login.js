document.getElementById('login-submit').addEventListener('click', function () {
    // console.log('button clicked');
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // check email and password (kora uchit na evabe)
    if(userEmail == 'maria@mim.com' && userPassword == 'secret'){
        // console.log('Valid User');
        window.location.href = 'banking.html';
    }
    
})



