const router = require('express').Router();
const issue = require('../models/issuesModel');
const Book = require('../models/booksModel');
const authMiddleware = require('../middlewares/authMiddleware');
const { message } = require('antd');

//issue a book to patron 

router.post("/issue-new-book",authMiddleware, async (req,res) => {
try{
    // inventory adjustment (available copies must be decremented by 1)
    await Book.findOneAndUpdate(
        { _id: req.body.book },
        {  $inc: { availableCopies: -1} }
    );
    //issue  book to patron (create new issue record)
    const newIssue = new Issue(req.body);
    await newIssue.save();
    return res.send({
        success: true,
        message: "Book issues successfully",
        data: newIssue,
    });
} catch (error) {
    return res.send({
        success: false,
        message: error.message,
    });
}
});


// get issues
router.post("/get-issues", authMiddleware, async (req, res) => {
    try {
      delete req.body.userIdFromToken;
      const issues = await Issue.find(req.body).populate("book").populate("user").sort({ issueDate: -1 });
      return res.send({
        success: true,
        message: "Issues fetched successfully",
        data: issues,
      });
    } catch (error) {
      return res.send({
        success: false,
        message: error.message,
      });
    }
  });

//   return a book

router.post("/return-book",authMiddleware,async(req,res)=>{
    try{
        //inventory adjustment( avaliable copies must be incremented by 1
        await Book.findOneAndUpdate(
            {
                _id: req.body.book,
            },
            {
                $inc :{availableCopies :1},
            }
        
        );

        //return book (update issue record)

        await Issue.findOneAndUpdate(
            {
                _id : req.body._id,
            },
            req.body
        );

        return res.send({
            success:true,
            message : "Book returned successfully",
        });
    } catch(error){
        return res.send({
            success:false,
            message: error.message,
        });
    }
});


module.exports = router;