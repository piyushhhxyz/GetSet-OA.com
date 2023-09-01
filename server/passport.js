const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");

const users = require("./models/user")

const GOOGLE_CLIENT_ID = "1035910352763-ilvgp1a8e5m7l2tinp61vbnfs0k1h1mr.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "058c56d1d3a93b08ae58";
const GITHUB_CLIENT_SECRET = "7bbe44e1319488afcf6489bae73f85bd5d56855a";

FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      // console.log(profile)
      const existingUser = users.findOne({ username:profile.displayName })

      const newUser = new users({ 
        username: profile.displayName, 
        profilePhotoURL: profile.photos[0].value,
        provider: profile.provider
      });
      newUser.save();
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      const newUser = new users({ 
        username: profile.displayName, 
        profilePhotoURL: profile.photos[0].value,
        provider: profile.provider
      });
      newUser.save();
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
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
