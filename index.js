const path = require("path");
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

const key = process.env.KEY || "you should watch gawr gura NOW";
const encryptor = require("simple-encryptor")(key);

const allowedOrigins = [`http://localhost:${port}`, "https://linkprotector.firestreaker2.gq"];
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS. Please watch Gawr Gura for permission."));
      }
    },
  })
);

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

        /* uncomment if you want logging */
        // console.log(`Link has been unlocked.\nURL: ${url}\nPassword: ${originalPassword}\nContent: ${content}`);
    } else {
        res.json({ URL: "Error: Password Incorrect"})

        /* uncomment if you want logging */
        // console.log(`Link unlocking has been failed.\nURL: ${url}\nPassword: ${originalPassword}\nAttempted Password: ${queryPassword}\nContent: ${content}`);
    }
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`);
});