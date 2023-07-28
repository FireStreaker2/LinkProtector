const form = document.getElementById("form");
const content = document.getElementById("content");
const password = document.getElementById("password");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (password.value.trim() === "") {
        console.error("Please fill in all fields.");
        return;
    }

    var url = window.location.href;
    var string = url.replace(`${window.location.origin}/unlock#`, "");

    const data = {
        password: password.value.trim(),
        url: string
    };

    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    };

    fetch("/verification", options)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        content.textContent = result.URL;
    })
    .catch(error => {
        console.error("Error:", error);
        content.textContent = error;
    });
});