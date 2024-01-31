const express = require("express");
const cors = require('cors')
const { connection } = require("./db");
const { userRouter } = require("./Routes/users.routes");
const { productRouter } = require("./Routes/products.routes");

require("dotenv").config()
const PORT = process.env.PORT
const app = express();
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  req.headers = "Content-Type", "html/text";
  res.send("<h1>I am happy</h1>");
});

app.use("/auth",userRouter )

app.use("/bags", productRouter)

app.listen(PORT, async () => {
    
  try {
    await connection
    console.log("Connect to mongoDb")
  } catch (error) {
    console.log("Err in Express App");
  }
  console.log("App is running on port", PORT);
});
