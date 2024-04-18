require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const fileUpload = require("express-fileupload")
const cookieParser = require("cookie-parser")

const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true
}))

app.use("/user", require("./routers/userRouter"))
app.use("/api", require("./routers/categoryRouter"))

// connect to mongodb
const URI = process.env.MONGODB_URL;

mongoose.connect(URI).then(() => {
    console.log("Connected to DB")
}).catch(err => {
    console.error("Error connecting to DB:", err);
});

app.get("/", (req, res) => {
    res.json({msg: "welcome to the website world"})
})
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("server is up and running", PORT)
})