//Page 5
function validation() 
{

    var name = document.getElementById("name").value; 
    var phone = document.getElementById("phone").value; 
    var email = document.getElementById("email").value; 
    var message = document.getElementById("message").value; 
    var error_message = document.getElementById("error_message"); 

    var text; 

    if(name.length == 0)
    {
        text="Please enter your name"; 
        error_message.innerHTML = text; 
        return false; 
    }

    if( (phone.length == 0) || (isNaN(phone)) ) 
    {
        text="Please enter valid phone number"; 
        error_message.innerHTML = text; 
        return false; 
    }

    if(!email.includes("@")) 
    {
        text="Please enter valid email"; 
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

//Page 7
function getMax()
{
    var fnum = document.getElementById("fnum").value;
    var snum = document.getElementById("snum").value;
    var error = document.getElementById("error");
    var text;

    var result = document.getElementById("result");
    var value;

    try
    {
        if((fnum == "") || (snum == ""))
        {
            throw "empty";
        }

        if((isNaN(fnum)) || (isNaN(snum)))
        {
            throw "not a number";
        }

        value = Math.max(fnum, snum);
        text = "The maximum value is " + value;
        result.innerHTML = text; 
    }

    catch(err)
    {
        text = "The input is " + err ;
        error.innerHTML = text;
        return false;
    }
}

function getMultiply()
{
    var fnum = document.getElementById("fnum").value;
    var snum = document.getElementById("snum").value;
    var error = document.getElementById("error");
    var text;

    var result = document.getElementById("result");
    var value;

    try
    {
        if((fnum == "") || (snum == ""))
        {
            throw "empty";
        }

        if((isNaN(fnum)) || (isNaN(snum)))
        {
            throw "not a number";
        }

        value = fnum * snum;
        text = "The multiplication value is " + value;
        result.innerHTML = text; 
    }

    catch(err)
    {
        text = "The input is " + err ;
        error.innerHTML = text;
        return false; 
    }
}

function getAdd()
{
    var fnum = document.getElementById("fnum").value;
    var snum = document.getElementById("snum").value;
    var error = document.getElementById("error");
    var text;

    var result = document.getElementById("result");
    var value;

    try
    {
        if((fnum == "") || (snum == ""))
        {
            throw "empty";
        }

        if((isNaN(fnum)) || (isNaN(snum)))
        {
            throw "not a number";
        }

        value = parseInt(fnum) + parseInt(snum);
        text = "The addition value is " + value;
        result.innerHTML = text; 
    }

    catch(err)
    {
        text = "The input is " + err ;
        error.innerHTML = text;
        return false; 
    }
}

function getMinus()
{
    var fnum = document.getElementById("fnum").value;
    var snum = document.getElementById("snum").value;
    var error = document.getElementById("error");
    var text;

    var result = document.getElementById("result");
    var value;

    try
    {
        if((fnum == "") || (snum == ""))
        {
            throw "empty";
        }

        if((isNaN(fnum)) || (isNaN(snum)))
        {
            throw "not a number";
        }

        value = fnum - snum;
        text = "The subtraction value is " + value;
        result.innerHTML = text; 
    }

    catch(err)
    {
        text = "The input is " + err ;
        error.innerHTML = text;
        return false; 
    }
}