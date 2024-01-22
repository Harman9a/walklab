require("dotenv").config();
const express = require("express");
const mongoConnect = require("./config/db");
const Schema = require("./Schema/Schema");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const PatientData = require("./models/Patient");

const app = express();
const port = process.env.PORT || 5000;

mongoConnect();
app.use(cors());
app.use(express.json());
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

app.post("/addPatient", async (req, res) => {
  try {
    const postData = req.body;

    // Check if required fields are present in the request body
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
