function register() {
    // var userData = JSON.parse(localStorage.getItem('userData'))
    // var userEmail = userData.email
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    //var user= document.getElementById("addedby").userEmail;
    var user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: password,
    };
    // Send the user data to your backend for registration
    fetch("/Users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        if (response.status === "User added with ID") {
            console.log("User registered successfully!");
            alert("User registered successfully!");
            // window.location.reload();
            // Optionally, redirect to a success page or display a success message
        } else {
            console.error("Registration failed:", data.message);
            // Display an error message to the user
        }
    })
}
