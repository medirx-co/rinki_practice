function validationForm(){
    console.log("yes");
    var email = document.getElementById("emailid").value;
    // var password = document.getElementById("password").value;
     
   
    if (email=="") {
        document.getElementById("email-id").innerHTML= "** Name must be filled out";
            // alert("Name must be filled out");
            return false;
    } 
    
}