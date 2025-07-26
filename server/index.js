const app = require("express")();

const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");
const database = require("./Connection/dbconnection");
database();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoutes = require("./routes/UserProfile");

const AuthRoutes = require("./routes/AuthRoutes");
const BlogRoutes = require("./routes/BlogRoutes");
const paymnet = require("./routes/paymnet");
const OrderRoutes = require("./routes/orederRoutes");
const PlantsRoute = require("./routes/PlantsRoute");
app.use(cookieParser());

app.use(
  cors({
    origin: ["https://cleanbreath.netlify.app", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],

    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/user", AuthRoutes);
app.use("/api/blog", BlogRoutes);
app.use("/api/payment", paymnet);
app.use("/api/order", OrderRoutes);
app.use("/api/plants", PlantsRoute);
app.use('/api/User',userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
