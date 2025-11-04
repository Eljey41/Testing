
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();


    const id = document.getElementById("idNumber").value;
    const lname = document.getElementById("lname").value;

    if (id != " " && lname != " ") {
        alert ("Succesful")
    } else {
        alert ("Failed")
    }
});

