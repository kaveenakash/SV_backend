const User = require('../models/User')
const _ = require("lodash");
const jwt = require("jsonwebtoken");
let refreshTokens = [];

const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(
    "361577374258-c45jn6o7muma9cj62ptm5r7ivvtdfa8k.apps.googleusercontent.com"
  );


  exports.googlelogin = (req, res) => {
    const { tokenId } = req.body;
  
    client
      .verifyIdToken({
        idToken: tokenId,
        audience:
          "361577374258-c45jn6o7muma9cj62ptm5r7ivvtdfa8k.apps.googleusercontent.com",
      })
      .then((response) => {
        const { email_verified, name, email } = response.payload;
        if (email_verified) {
          User.findOne({ email }).exec((err, user) => {
            if (err) {
              return res.status(400).json({
                error: "Something went wrong",
              });
            } else {
              if (user) {
                let accessToken = jwt.sign({ _id: user._id }, "access", {
                  expiresIn: "20s",
                });
                let refreshToken = jwt.sign({ _id: user._id }, "refresh", {
                  expiresIn: "7d",
                });
                refreshTokens.push(refreshToken);
                const { _id, name, email } = user;
                res.json({
                  accessToken,
                  refreshToken,
  
                  user: { _id, name, email },
                  message: "Signin Success",
                });
              } else {
                let password = email + process.env.JWT_SIGNIN_KEY;
                let newUser = new User({ name, email, password });
                newUser.save((err, data) => {
                  if (err) {
                    res.status(400).json({
                      error: "Something went wrong",
                    });
                  }
                  const token = jwt.sign(
                    { _id: data._id },
                    process.env.JWT_SIGNIN_KEY,
                    { expiresIn: "7d" }
                  );
                  const { _id, name, email } = newUser;
                  res.json({
                    token,
                    user: {
                      _id,
                      name,
                      email,
                    },
                    message: "Signin Success",
                  });
                });
              }
            }
          });
        } else {
          return res.status(400).json({
            error: "Email Unverified",
          });
        }
      });
  };