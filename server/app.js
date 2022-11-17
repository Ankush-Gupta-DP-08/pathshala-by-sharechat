
const express=require('express');
const app=express();

app.use(express.json());


const PORT=8000;



app.get("/",(req,res)=>{
       res.send("Welcome to home page app js");
});

console.log("Hi")


app.listen(PORT,()=>{
    console.log(`Server is running at port no ${PORT}`);
});