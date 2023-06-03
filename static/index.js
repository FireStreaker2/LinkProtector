const form = document.getElementById("form");
const content = document.getElementById("content");
const password = document.getElementById("password");
const resultContainer = document.getElementById("result");
const linkBox = document.getElementById("link");
const linkPassword = document.getElementById("linkPassword");
const newButton = document.getElementById("new");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const contentValue = content.value.trim();
    const passwordValue = password.value.trim()

    if (contentValue=== "" || passwordValue === "") {
        console.error("Please fill in all fields.");
        return;
    }

    const data = {
        content: contentValue,
        password: passwordValue
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
        var link = `${window.location.origin}/unlock#${result.URL}`
        form.style.display = "none";
        resultContainer.style.display = "flex";
        linkBox.innerHTML = `<a href=${link} target="_blank">${link}</a>`;
        linkPassword.innerHTML = passwordValue;
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

newButton.addEventListener("click", () => {
    form.style.display = "flex";
    resultContainer.style.display = "none";
});