const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user.routes");

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api", userRoutes);

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Express with Docker...FFF</h1>");
});

const PORT = process.env.PORT || 5050;

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Db is connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});