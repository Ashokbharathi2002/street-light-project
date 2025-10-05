// login system
function login(){
    var email = document.getElementById("email_field").value;
    var password = document.getElementById("password_field").value;

    if(email == "ashok@bharathi" && password == "12345678"){
        // alert("login successful");
        alertbox.render({
            alertIcon: 'success',
            title: 'Thank You!',
            message: ' login successful',
            btnTitle: 'Ok',
            border:true
        });
        // delay for 2 seconds then redirect to index.html
        setTimeout(function(){
            window.location.href = "/das/dashboard.html";
        }, 2000);
    }
    else{
        // alert("login failed");
        alertbox.render({
            alertIcon: 'error',
            title: 'Thank You!',
            message: 'login failed try again',
            btnTitle: 'Ok',
            border:true
        });
    }  
}
