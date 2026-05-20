document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let result = document.getElementById("result");

    if(name === "" || email === "" || phone === "" || message === ""){
        result.style.color = "red";
        result.innerText = "Please fill all fields.";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        result.style.color = "red";
        result.innerText = "Please enter a valid email address.";
        return;
    }

    if(phone.length !== 10){
        result.style.color = "red";
        result.innerText = "Phone number must be 10 digits.";
        return;
    }

    result.style.color = "green";
    result.innerText = "Form submitted successfully!";
});