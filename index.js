const express = require("express")
const axios = require("axios")
var bodyParser = require("body-parser")
const path = require("path")
const app = express()

const base_url = "https://node73593-noderestthu.proen.app.ruk-com.cloud/"

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
