require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./src/router/router");
const port = process.env.PORT || 3000;
const fs = require('fs')
const https = require('https')
const path = require('path')

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(router);

const sslServer = https.createServer(
    {
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    },
    app
)
sslServer.listen(port);