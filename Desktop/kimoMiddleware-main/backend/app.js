const express = require("express")
const app = express()
const cookerParser = require('cookie-parser')
const bodyParser = require('body-parser')
const userDetails = require("./routes/userRoutes");
const cors = require("cors");
const authRoute = require('./routes/authRoute');
const { logEvents } = require("./middleware/logger.js");
const errorHandler = require("./middleware/errorHandler.js");
const { logger } = require("./middleware/logger");
const path = require("path");






// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});
console.log(process.env.PORT,"endpoin");

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  
  next();
});

app.use(logger);
app.use(express.json())
app.use(cookerParser())
app.use(cors({origin: "http://localhost:300", 
withCredentials: true}))

app.use(bodyParser.urlencoded({extended:true}))    
app.use('/',express.static('uploads'))
app.use("/api/v1/", userDetails); 
app.use("/api/v1/", authRoute);


app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
      res.sendFile(path.join(__dirname, "views", "404.html"));
    } else if (req.accepts("json")) {
      res.json({ message: "404 not found" });
    } else {
      res.type("txt").send("404 Not Found");
    }
  });
//config
if(process.env.NODE_ENV !="PRODUCTION"){
    require('dotenv').config({
        path:'backend/config/.env' 
    })
}
app.use(errorHandler);

module.exports =app
 