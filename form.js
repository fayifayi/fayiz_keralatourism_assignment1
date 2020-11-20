let email = document.getElementById("email");
// let error = document.getElementById("error");
let pwd = document.getElementById("pwd");
let cpwd =   document.getElementById("cpwd");
let phone = document.getElementById("phone");
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");

function validate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/;
    if(fname.value.trim()==""){
        alert("First Name cannot be Blank");
        return false;
    }
    else if(lname.value.trim()==""){
        alert("Last Name cannot be Blank");
        return false;
    }
    else if(email.value.trim()==""){
         alert("email cannot be empty");
         return false;
    }
    else if(phone.value.trim()==""){
        alert("phone no cannot be Blank");
        return false;
    }
    else if(phone.value.length<10 || phone.value.length>10){
        alert("Please Enter Correct Number");
        return false;
    }
    else if(pwd.value.trim()==""){
        alert("Password cannot be Blank");
        return false;
    }   
    else if(cpwd.value==""){
        alert("Password cannot be Blank");
        return false;
    }   
   
    else if (pwd.value!=cpwd.value){
        alert("Password not same");
        return false;
    }
    else if(pwd.value.length<8){
        alert("Minimum 8 Characters Needed");
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