const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "1035910352763-kicglhp6h6hof4jsdg49civfvr45qekt.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "058c56d1d3a93b08ae58";
GITHUB_CLIENT_SECRET = "7bbe44e1319488afcf6489bae73f85bd5d56855a";

passport.use(
  new GoogleStrategy({
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy({
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);


passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});
