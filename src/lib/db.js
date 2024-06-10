const mongoose = require('mongoose')
require('dotenv').config()
const {
    DB_USER, 
    DB_PASSWORD,
    DB_HOST, 
    DB_NAME
} = process.env

const URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
//const URI = 'mongodb+srv://leonardomp2200:<password>@javascriptkodemia.6m1hpzc.mongodb.net/?retryWrites=true&w=majority&appName=javaScriptKodemia'


// Si la libreria mongoose tiene el metodo connect que regresa una promesa, por que no se pone un async await en esta ocasion? 
function connect() {
    return mongoose.connect(URI)
    
}
module.exports = {connect}