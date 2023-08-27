const cookieSession = require("cookie-session");
const express = require("express");
const cors = require("cors");
const passportSetup = require("./passport");
const passport = require("passport");

const { dbConnect } = require("./config/dbConnect");
const { users } = require("./models/user");
const { questions } = require("./models/questions");

const authRoute = require("./routes/auth");
const app = express();

dbConnect();
app.use(
  cookieSession({ name: "session", keys: ["lama"], maxAge: 24 * 60 * 60 * 100 })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);

app.listen(4000, () => {
  console.log("Server is running at 4000!");
});
