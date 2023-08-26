require("dotenv").config()
const express = require("express")
const cors = require("cors") 
const {dbConnect} = require("./config/dbConnect")
const cookieSession = require("cookie-session");
const passportSetup = require("./passport");
const passport = require("passport");
const authRoute = require("./routes/auth");


const app = express() 
app.use(
	cookieSession({ name: "session", keys: ["piyushbhawsar"], maxAge: 24*60*60*100 })
);
app.use(passport.initialize());
app.use(passport.session());


app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

dbConnect()

app.use(express.json())

app.use("/auth", authRoute);

const PORT = process.env.PORT || 4000 
app.listen(PORT, () => console.log(`server started at ${PORT}`))