const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

const users = [
    {
        id: 1,
        name: "Krithik",
        age: 22
    },
    {
        id: 2,
        name: "Rahul",
        age: 23
    },
    {
        id: 3,
        name: "Arjun",
        age: 21
    }
];

// GET
app.get("/users", (req, res) => {
    res.status(200).json(users);
});

// GET with params
app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        message: "User fetched",
        id: id
    });
});

// GET with query
app.get("/users", (req, res) => {
    const search = req.query.search;

    res.status(200).json({
        search: search
    });
});

// POST
app.post("/users", (req, res) => {
    const { name, age } = req.body;

    res.status(201).json({
        message: "User created",
        user: {
            name,
            age
        }
    });
});

// PUT
app.put("/users/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        message: "User updated",
        id
    });
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    res.status(200).json({
        message: "User deleted",
        id
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});