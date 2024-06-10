require("dotenv").config()
const server = require("./src/server"); 
const db = require("./src/lib/db")
const port = process.env.PORT || 8080;




// Se puede usar un try catch en lugar del then y el catch? 
db.connect()
.then(()=>{
    console.log('Conexion exitosa')
    server.listen(port, () => {
        console.log(`Server is running ar http://localhost:${port}`);
      });
})
.catch((error)=>{
    console.error("Error de conexion: ", error)
})




