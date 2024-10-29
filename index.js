const express=require('express');
const app=express();
const PORT=3000;

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
    res.sendFile(__dirname +"/home/index.html");
});
app.get("/cir",(req,res)=>{
    res.sendFile(__dirname +"/home/circle.html");
});
app.get("/tri",(req,res)=>{
    res.sendFile(__dirname +"/home/triangle.html");
});

app.post("/afrin",(req,res)=>{
    const radious=req.body.radious;
    const area=Math.PI *radious*radious;
    res.send(`<h2>Area of Circle is:${area}</h2>`);
})

app.post("/suzon",(req,res)=>{
    const base=req.body.base;
    const height=req.body.height;
    const area=0.5 *base*height;
    res.send(`<h2>Area of Triangle is:${area}</h2>`);
})



app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`)
})
