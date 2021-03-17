function validation()
{
    var name = document.getElementById("name").value; 
    var email = document.getElementById("email").value; 
    var phone = document.getElementById("phone").value; 
    var message = document.getElementById("message").value; 
    var error_message = document.getElementById("error_message"); 


    var text;

    if(name.length == 0)
    {
        text="Please enter your name";
        error_message.innerHTML = text;
        return false;
    }

    if((!email.includes("@")))
    {
        text="Please enter valid email";
        error_message.innerHTML = text;
        return false;
    }

    if(isNaN(phone))
    {
        text="Please enter valid phone number";
        error_message.innerHTML = text;
        return false;
    }

    if(message.length == 0)
    {
        text="Please enter your message";
        error_message.innerHTML = text;
        return false;
    }

    alert("Thank you");
}