let email = document.getElementById("email");
let error = document.getElementById("error");
function validate(){
     if(email==""||pwd1==""||pnum==""||fname==""){
         alert("Fields cannot be empty")
     }
     let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})$/
     if(regexp.test(email.value)){
         error.innerHTML = "Valid";
         error.style.color = "green";
         return true;
     }
     else{
         error.innerHTML = "Invalid email";
         error.style.color = "red";
         return false;
     }
}