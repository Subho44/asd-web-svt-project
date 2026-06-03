//register

function reguser() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = {
        name,
        email,
        password
    };
    localStorage.setItem("user", JSON.stringify(user));
    alert("registration successfully");
    window.location.href = "login.html";
}

//login
function loginuser() {
   
    let email = document.getElementById("loginemail").value;
    let password = document.getElementById("loginpassword").value;

    let user = JSON.parse(localStorage.getItem("user"));

    if(user && user.email === email && user.password === password){

    localStorage.setItem("loginuser", JSON.stringify(user));
    alert("login successfully");
    window.location.href = "index.html";
    } 
    else {
        alert("invalid user");
    }   
}