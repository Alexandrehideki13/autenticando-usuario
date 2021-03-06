const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const rotaUsuarios = require("./routes/usuarios");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Acces-Control-Allow-Origin", "*");
    res.header(
        "Acces-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header(
            "Acces-Control-Allow-Methods",
            "PUT, POST, PATCH, DELETE, GET"
        );
        return res.status(200).send({});
    }

    next();
});

app.use("/usuarios", rotaUsuarios);

module.exports = app;