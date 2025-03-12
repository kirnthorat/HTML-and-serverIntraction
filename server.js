const bodyParser = require("body-parser");

const express =require("express");
const path = require("path");

const app = express();

// set ejs as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 

// middleware to parsw form data
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

// router
app.get("/",(req, res) => {
    res.render("index");
});

// form submission handle
app.post("./submit",(req, res)=>{
    const { name,email}=req.body;
    res.render("success",{name,email});
}) ;



let port = 8080;
app.listen(port,()=>{
    console.log(`app listening on port`);
    
});

