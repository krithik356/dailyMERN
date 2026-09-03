const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const Router = express.Router();


Router.post("/api/auth/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // 1. Check all fields
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "Please fill all fields"
            });
        }

        // 2. Check if user already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: "User already exists"
            });
        }

        // 3. Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // 4. Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // 5. Send response
        return res.status(201).json({
            message: "User registered successfully",
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "An error occurred"
        });
    }
});


Router.post("/api/auth/login",async (req,res) =>{
    try{
   
    const {email,password} = req.body;
    
    if(!email || !password){
        return res.status(400).json({
            messsage:"Please fill all fields"
        })
    }   

    const user = await User.findOne({email});

    if(!user){
        return res.status(400).json({
            messsage:"Invalid email or password"
        })
    }

    const passwordCheck = await bcrypt.compare(password,user.password);

    if (!passwordCheck) {
            return res.status(401).json({
                message: "Invalid email or password"
            });
        }
    const token = jwt.sign({
        user_id:user.id
    },
    process.env.JWT_SECRET,
    {expiresIn: "1h"}
    );

    return res.status(200).json({
        message:"Login successfull",
        token,
        user: {
    id: user._id,
    name: user.name,
    email: user.email
}
    });

    }catch(error){
        console.log(error);
        return res.status(400).json({
            message:"An error occured",
            error
        })
    }
});

module.exports = Router;
