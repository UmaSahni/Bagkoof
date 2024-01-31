const express = require("express");
const { UserModel } = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const userRouter = express.Router();

userRouter.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // <----- Password hashing using bcrypt ----->
    bcrypt.hash(password, 4, async function (err, hash) {
      // Store hash in your password DB.
      if (err) {
        res.send({ Err: "Error in hasing password" });
      } else {
        const newuser = new UserModel({ name, email, password: hash });
        await newuser.save();
        res.status(200).send({ msg: "New user registered" });
      }
    });
  } catch (error) {
    res.status(500).send({ Err: "Error in Signup", error });
  }
});

userRouter.post("/login", async (req, res) => {
  try {
    const {email, password} = req.body
    const FindUser = await UserModel.findOne({email})
    if(FindUser){
      // Load hash from your password DB.
      bcrypt.compare(password, FindUser.password, function(err, result) {
          // result == true
          if(err){
            res.status(200).send({"msg":"Wrong Credentials"})
          }
          else{
            console.log(result)
            res.status(200).send({"msg":"You are logged in !"})
          }
      });
    }
    else{
      res.status(400).send({"msg":"user Not Found. Please Register Yourself"})
    }
  } catch (error) {

  }

});

module.exports = { userRouter };
