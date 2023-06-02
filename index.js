const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const key = process.env.KEY || "you should watch gawr gura NOW";
const encryptor = require("simple-encryptor")(key);

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "./static")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static", "index.html"));
});

app.get("/unlock", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./static", "unlock.html"));
});

app.post("/creation", (req, res) => {
    const content = req.body.content;
    const password = req.body.password;

    const encryptedContent = encryptor.encrypt(content);
    const encryptedPassword = encryptor.encrypt(password);

    const encryptedUrl = `${encryptedContent}|${encryptedPassword}`;

    res.json({ URL: encryptedUrl });
});

app.post("/verification", (req, res) => {
    const queryPassword = req.body.password;
    const url = req.body.url;

    var content = url.split("|")[0];
    var originalPassword = url.split("|")[1];

    content = encryptor.decrypt(content);
    originalPassword = encryptor.decrypt(originalPassword);


    if (queryPassword === originalPassword) {
        res.json({ URL: content });
    } else {
        res.json({ URL: "Error: Password Incorrect"})
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});