const form = document.getElementById("form");
const content = document.getElementById("content");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (content.value.trim() === "" || password.value.trim() === "") {
        console.error("Please fill in all fields.");
        return;
    }

    const data = {
        content: content.value.trim(),
        password: password.value.trim()   
    };

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch("/creation", options)
    .then(response => response.json())
    .then(result => {
        window.location.href = `/unlock#${result.URL}`;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});