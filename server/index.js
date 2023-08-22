require("dotenv").config()
const express = require("express")
const cors = require("cors") 
const {dbConnect} = require("./config/dbConnect")
//export models here :

dbConnect()

const app = express() 
app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)
app.use(express.json())

// app.use("/api/v1/" router)

const PORT = process.env.PORT || 4000 
app.listen(PORT, () => console.log(`server started at ${PORT}`))