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

//update book
router.put("/update-book/:id", authMiddleware, async (req,res) =>{
    try{
        await Book.findByIdAndUpdate(req.params.id, req.body);
        return res.send({ success: true, message: "Book updated successfully" });
    } catch(error){
return res.send({ success: false,message: error.message });
    }
});
