
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");

// Load environment variables
dotenv.config();

// Connect to database
connectDb();

// Initialize Express
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cors({ origin: 'https://expense-tracker-deploy-frontend-1.onrender.com' }));


// Test Route
app.get("/test", (req, res) => {
  res.send("Backend is running");
});

// Routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transections", require("./routes/transectionRoutes"));

// Define PORT correctly
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

