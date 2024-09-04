function sendMail(event) {
    event.preventDefault();  
    
    let parms = {
        name : document.getElementById("name-field").value,  
        email: document.getElementById("email-field").value, 
        subject : document.getElementById("subject-field").value, 
        message : document.getElementById("message-field").value, 
    }
    
    emailjs.send("service_x1460l8","template_gvhxyno",parms)
    .then(function(response) {  
        alert("Email Sent!");
    }, function(error) {
        alert("Failed to send email, please try again.");
    });
}
