const connectDB = require('./db/db')
const app = require('./app')
const axios = require('axios');


// //handling error exceptions
// process.on('uncaughtException',(err)=>{
//     console.log(`Error: ${err.message}`)
//     console.log(`shutting down the server for handling uncaught exception`)
// })

//config
if(process.env.NODE_ENV !="PRODUCTION"){
    require('dotenv').config({
        path:'config/.env' 
    })
}           

//connect database
connectDB()      


const username = 'neoapi';
const password = 'kimo12345!@#$%';
const requestData = {}; // You can pass any data you need in the request body


axios.post(process.env.PRODUCTS_ENDPOINT, requestData, {
  auth: {
    username: username,
    password: password
  }
})
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


//create server
const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on port: ${process.env.PORT}`)
})

//unhandled promise rejection
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Handle the error appropriately, e.g., close the application or log the error.
    server.close(()=>{
        process.exit(1); 
    })
  });
  