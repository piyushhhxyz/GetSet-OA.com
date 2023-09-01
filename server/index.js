const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");

const fileUpload = require("express-fileupload");
const { dbConnect } = require("./config/dbConnect");


const authRoute = require("./routes/auth");
const uploadRoute = require("./routes/Upload")
const getDataRoutes = require('./routes/getData');

const app = express();

dbConnect();
app.use(express.static('public'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
	fileUpload({
		useTempFiles:true,
		tempFileDir:"/tmp",
	})
)

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use('/api/v1', uploadRoute)
app.use('/api/v1/getData', getDataRoutes);

app.listen(4000, () => {
  console.log("Server is running at 4000!");
});
