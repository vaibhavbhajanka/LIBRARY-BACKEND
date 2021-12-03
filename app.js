const express = require("express")
const app = express()
const mongo = require("mongoose")
const url = "mongodb+srv://vaibhav:vaibhav@cluster0.7wrah.mongodb.net/libraryDatabase?retryWrites=true&w=majority"
const mySchema  = require('./schema');
mongo.connect(url).then(()=>console.log("Connected to DB"))

app.use(express.json())

app.post("/add-new-book",async(req,res)=>{
    const bName = req.body.bookName;
    const studName = req.body.issuerName;
    const issueDate = req.body.date;

    try{
        const newBook = new mySchema({
            bookName:bName,
            issuerName:studName,
            date:issueDate
        }
        
    )
    const savedBook = await newBook.save()
    res.json(
        {"message":"Student Data saved","data":savedBook}
    )
    }catch(err){
        res.json(err);
    }
})
app.listen(3000,()=>console.log("Express started"))