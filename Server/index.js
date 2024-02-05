require("dotenv").config();
const express = require("express");
const mongoConnect = require("./config/db");
const Schema = require("./Schema/Schema");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const PatientData = require("./models/Patient");
const BulkData = require("./models/BulkData");
const Users = require("./models/Users");
const path = require("path");
const { pid } = require("process");
const { log } = require("console");

const app = express();
const port = process.env.PORT || 5002;

mongoConnect();
app.use(cors());
app.use(express.json());
app.use(express.text());
app.use(
  "/api",
  graphqlHTTP({
    schema: Schema,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Express Started on ${port}`);
});

app.post("/login", async (req, res) => {
  try {
    const user = await Users.findOne({
      username: req.body.username,
      password: req.body.password,
    });

    if (user) {
      console.log(user);
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/getBulkData", async (req, res) => {
  try {
    const entries = await BulkData.find();

    res.status(200).json({ entries });
  } catch (error) {
    res.status(500).json({ error: "Error getting data from Database." });
  }
});
// Serve static files from the 'client/build' folder
app.use(express.static(path.join(__dirname, "..", "client", "build")));

// Handle any other routes by serving the 'index.html' file
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

app.post("/addPatient", async (req, res) => {
  try {
    const postData = req.body;

    // Check if required fields are present in the request body
    const getPid = await PatientData.find({ p_id: postData.p_id });
    if (getPid != 0) {
      return res
        .status(400)
        .json({ error: "Patient Id is already exits in the system." });
    }
    if (!postData || !postData.name) {
      return res
        .status(400)
        .json({ error: "Name is required in the request body." });
    }

    // Create a new PatientData instance
    const newEntry = new PatientData(postData);

    // Save the new entry to the database
    const savedEntry = await newEntry.save();

    // Respond with success message and the saved data
    res
      .status(200)
      .json({ message: "Data saved successfully!", data: savedEntry });
  } catch (error) {
    // Handle specific error cases or provide a general error message
    if (error.name === "ValidationError") {
      // Mongoose validation error
      res
        .status(400)
        .json({ error: "Validation error. Please check your input." });
    } else {
      // General server error
      res.status(500).json({ error: "Error saving table data." });
    }
  }
});

// Assuming you have your app and other configurations here

app.post("/getPatient", async (req, res) => {
  try {
    // Extract the p_id from the request body
    const requestedPid = req.body.p_id;
    console.log("Requested PID:", requestedPid);

    // Find the patient data in the database based on p_id
    const patientData = await PatientData.findOne({ p_id: requestedPid });

    // Check if patient data exists
    if (!patientData) {
      return res.status(404).json({ message: "Patient Id not found." });
    }

    // Extract createdAt and format date and time separately
    const Date = patientData.createdAt.toDateString(); // Date component
    const Time = patientData.createdAt.toLocaleTimeString(); // Time component

    // Respond with the retrieved patient data including separated date and time
    res.status(200).json({
      data: {
        ...patientData._doc,
        Date,
        Time,
      },
    });
  } catch (error) {
    // Handle specific error cases or provide a general error message
    console.error(error);
    res.status(500).json({ error: "Error retrieving patient data." });
  }
});

// Continue with other configurations and server setup

app.post("/addBulkData", async (req, res) => {
  try {
    const stringData = req.body;
    const newEntry = new BulkData({ data: stringData });
    const savedEntry = await newEntry.save();
    res
      .status(200)
      .json({ message: "Data saved successfully!", data: savedEntry.data });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Error saving data to the database." });
  }
});
