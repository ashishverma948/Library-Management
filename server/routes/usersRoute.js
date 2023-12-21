const express = require("express");
const router = express.Router();
const User = require("../models/usersModel");
const bcrypt=require("bcryptjs");
// register a new user 
router.post("/register", async (req, res) => {
    try {
        // check if user already exist
        const user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.send({
                success: false,
                message: "user already exists",
            });

        }
    
    // hash password
    const salt=await bcrypt.genSalt(10);
    const hashedPassword=await bcrypt.hash(req.body.password,salt);
    req.body.password=hashedPassword;
    // create new user
    const newUser=new User(req.body);
    await newUser.save();

    return res.send({
        success:true,
        message:"User created successfully",
    });
}
    catch (error) {
        return res.sand({
            success: false,
            message: error.message,
        });
    }
});
module.exports=router;