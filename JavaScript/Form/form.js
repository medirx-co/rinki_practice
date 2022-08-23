function validation(){
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("MobileNumber").value;
    var role = document.getElementById("role").value;
    var pass = document.getElementById("pass").value;
    var conpass = document.getElementById("conpass").value;

    if(name==""){
        document.getElementById("fname").innerHTML= "** Name must be filled out";
        
        return false;

    }
    if((name.length <=2 || name.length > 20)){
        document.getElementById("fname").innerHTML= "** Character must be 2 to 20 words ";
        
        return false;

    }
    if(!isNaN(name)){
        document.getElementById("fname").innerHTML= "** Only characters are allowed ";
        
        return false;

    }
    if(email==""){
        document.getElementById("emailid").innerHTML= "** Email must be filled out";
        
        return false;

    }
    if(email.indexof("@") <=0 ){
        document.getElementById("emailid").innerHTML= "** Invaild email-id";
        
        return false;

    }
    

    if(mobile==""){
        document.getElementById("mobileno").innerHTML= "** Name must be filled out";
        
        return false;

    }
    if(!isNaN(mobile)){
        document.getElementById("mobileno").innerHTML= "** Only digits are allowed ";
        
        return false;

    }
    if(mobile.length=!10){
        document.getElementById("mobileno").innerHTML= "** Only 10 digits mobile no. ";
        
        return false;

    }
    if(role==""){
        document.getElementById("selection").innerHTML= "** Please Select the role";
        
        return false;

    }
    if(pass==""){
        document.getElementById("passwords").innerHTML= "** Must be 8-20 characters long";
        
        return false;

    }
    if((pass.length <=5 || pass.length > 20)){
        document.getElementById("passwords").innerHTML= "** Must be 8-20 characters long,contain letters and numbers, and must not contain spaces, special characters";
        
        return false;

    }
    if(pass!= conpass){
        document.getElementById("passwords").innerHTML= "** Password not matched";
        
        return false;

    }
    if(conpass==""){
        document.getElementById("confirmpass").innerHTML= "** Please fill the password";
        
        return false;

    }
    
    







    



}