// Change background color
function changeBgColor() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
}

// Show message when form is submitted
function showMessage(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    document.getElementById("message").innerText = "Thank you, " + name + "! I'll get back to you soon.";
}