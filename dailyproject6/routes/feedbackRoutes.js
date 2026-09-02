const express = require("express");
const mongoose = require("mongoose");
const Feedback = require("../models/Feedback");

const router = express.Router();

router.post("/", async (req,res,next) => {
    try{
        const {name,email,rating,message} = req.body;
        
        if(!name || !email || !rating || !message){
            return res.status(400).json({
                message:"All fields are required"
            });
        }

        if(rating < 1 || rating > 5){
            return res.status(400).json({
                message:"Rating must be between 1 and 5"
            })
        }
        const feedback = await Feedback.create({
            name,
            email,
            rating,
            message
        })
        res.status(200).json({
            message:"Feedback created successfully",
            feedback
        });

    }catch(error){
        next(error);
    }
});
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({
        message: "Feedback not found"
      });
    }

    const feedback = await Feedback.findById(id);

    if (!feedback) {
      return res.status(404).json({
        message: "Feedback not found"
      });
    }

    res.status(200).json(feedback);

  } catch (error) {
    next(error);
  }
});

module.exports = router;