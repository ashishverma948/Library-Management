const router = require("express").Router();
const Book = require("../models/booksModel");
const authMiddleware =require("../middlewares/authMiddleware");

//add a book
router.post("/add-book", authMiddleware, async (req,res)=>{
    try{
        const newBook =new Book(req.body);
await newBook.save();
return res.send({ success: true, message: "Book added successfully" });
    } catch (error) {
        return res.send({success: false,message: error.message});
    }
});
