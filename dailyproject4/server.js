const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err);
    });
    const recipes = [
    {
        name: "Chicken Biryani",
        cuisine: "Indian",
        cookTime: 45,
        rating: 4.8
    },
    {
        name: "Paneer Tikka",
        cuisine: "Indian",
        cookTime: 25,
        rating: 4.6
    },
    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        cookTime: 20,
        rating: 4.7
    },
    {
        name: "Pasta Alfredo",
        cuisine: "Italian",
        cookTime: 25,
        rating: 4.5
    },
    {
        name: "Chicken Tacos",
        cuisine: "Mexican",
        cookTime: 20,
        rating: 4.4
    },
    {
        name: "Veggie Burger",
        cuisine: "American",
        cookTime: 15,
        rating: 4.2
    },
    {
        name: "Chicken Noodles",
        cuisine: "Chinese",
        cookTime: 18,
        rating: 4.3
    },
    {
        name: "Masala Dosa",
        cuisine: "Indian",
        cookTime: 20,
        rating: 4.9
    },
    {
        name: "Beef Burger",
        cuisine: "American",
        cookTime: 25,
        rating: 4.1
    },
    {
        name: "Sushi Roll",
        cuisine: "Japanese",
        cookTime: 30,
        rating: 4.8
    }
];

    const recipeSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    cookTime: Number,
    rating: Number
});

const Recipe = mongoose.model("Recipe", recipeSchema);

Recipe.insertMany(recipes)
    .then(() => {
        console.log("Recipes inserted");
    })
    .catch((err) => {
        console.log(err);
    });


    Recipe.find({
    cookTime: { $lt: 30 },

    cuisine: {
        $in: ["Indian", "Italian", "Mexican"]
    },

    name: {
        $regex: "chicken",
        $options: "i"
    }
})
.sort({ rating: -1 })
.limit(3)
.then((result) => {
    console.log(result);
})
.catch((err) => {
    console.log(err);
});