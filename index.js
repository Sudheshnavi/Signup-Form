function validateForm()
{
    var fn=document.getElementById("fname").value;
    var ln=document.getElementById("lname").value;
    if(fn==null||fn=="")
    {
        alert("Please enter first name!");
        return false;
    }
    if(ln==null||ln=="")
    {
        alert("Please enter last name!");
        return false;
    }
    if(email.value==" ")
    {
        alert("Please enter valid email id");
        return false;
    }
    matchPassword();
    
   

}
function matchPassword() {
    var pw1 = document.getElementById("createPass").value;
    var pw2 = document.getElementById("confirmPass").value;

  
  //check empty password field  
  if(pw1 == "") 
  {  
     alert( "**Fill the password please!");  
     return false;  
  }  
   
 //minimum password length validation  
  if(pw1.length < 8) {  
     alert("**Password length must be atleast 8 characters");  
     return false;  
  }  
  
//maximum length of password validation  
  if(pw1.length > 15) {  
     alert("**Password length must not exceed 15 characters");  
     return false;  
  } 
  if(pw1 != pw2)
  {
      alert("Password is not matched!");
      return false;
  }
else {
        alert("You are succesfully signed in!");
    }

  }
  
var mail = document.getElementById("email");
function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(regform.email.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}