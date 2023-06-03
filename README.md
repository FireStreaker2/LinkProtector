![LinkProtector](https://socialify.git.ci/FireStreaker2/LinkProtector/image?description=1&font=Source%20Code%20Pro&forks=1&issues=1&logo=https%3A%2F%2Flinkprotector.firestreaker2.gq%2Ffavicon.png&name=1&owner=1&pattern=Signal&pulls=1&stargazers=1&theme=Light)

# About
LinkProtector is a simple website used to protect content with a password, without the use of databases. Think of it like <a href="https://controlc.com/">controlc.com</a> but without having to mess around with SQL. This is achievable through the use of <a href="https://www.npmjs.com/package/simple-encryptor">``simple-encryptor``</a> and passing encrypted info from the url to the backend, and then decrypting it there. After authenticating, the backend then sends the decrypted content to the frontend. An example is below.    

``https://linkprotector.firestreaker2.gq/unlock#83affbda5e745be7106752fb739da25a91ecd9e673947dff1a7350068836ece0baaed7b9ad2c095a6d42636321757469+WoXMcT5WbObLgD38ssi8TREhxyxSceSIHTJa7RygRSLgrTq442smpjNHJqTSG+Hde8ePHGjLVsTcGMMxjn9HvdGgwI5icSHlYJ0u9lFGsI=|f94ac3409950cbb456b575e857b5e3d5bd94d3b19cbab3d196b244c69a8cf74eea078b42e549ee74737016e210e84655GPPXLkTV+XSKt/K5SUE4QQ== `` 

Password: ``gura``   

While LinkProtector was originally designed to protect links (as implied from the name), you can also "protect" regular content, like messages and such.

# Selfhosting
```bash
$ git clone https://github.com/FireStreaker2/LinkProtector.git
$ cd LinkProtector
$ npm i
$ npm start
```
If you do choose to selfhost this, please make sure to:
* add your own key inside of your environment variables 
> **NEVER** hard code them into your files
* add your own link to line 10 of ``index.js`` (so cors doesnt kill you)

# Contributing
If you would like to contribute, you can <a href="https://github.com/FireStreaker2/LinkProtector/fork">fork the repo</a> and <a href="https://github.com/FireStreaker2/LinkProtector/compare">make a PR</a>, or contact me via email @ ``suggestions@firestreaker2.gq``

# License
<a href="https://github.com/FireStreaker2/LinkProtector/blob/main/LICENSE">MIT</a>
