const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors")

//and create our instances
const components = require("./routes/api/components");
const containers = require("./routes/api/containers");
const styles = require("./routes/api/styles");


//set our port to either a predetermined port number if you have set
const port = process.env.API_PORT || 8080;


require("dotenv").config();

/*
 * Configure Mongoose
*/
mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb://${process.env.MONGO_USER}:${
      process.env.MONGO_PASS
    }@ds239703.mlab.com:39703/resume`,
    {
      useNewUrlParser: true
    }
  )
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch(err => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });
/*
 * Configure Express
*/
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
/*
 * Configure Routes
*/

// Use routes
app.use("/api/components", components);
app.use("/api/containers", containers);
app.use("/api/styles", styles);
//starts the server and listens for requests
app.listen(port);
console.log(`api running on port ${port}`);
