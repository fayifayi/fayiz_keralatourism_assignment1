let email = document.getElementById("email");
let pwd = document.getElementById("pwd");

function signin(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/ 
    if(email.value.trim() == ""){
        alert("Fields are Empty");
        email.style.border = "2px solid red";
        return false;
    }
    else if(pwd.value.trim() == "" ){
        alert("Password cannot be Blank");
        pwd.style.border = "2px solid red";
        return false;
    }  
    else if(pwd.value.length<=7 ){
        alert("Password is Shorter");
        pwd.style.border = "2px solid red";
        return false;
    }
    else if(regexp.test(email.value)){
        email.innerHTML = "Valid";
        email.style.color = "green";
        return true;
    }
    else{
        email.innerHTML = "Invalid email";
        email.style.color = "red";
        return false;
    }
}