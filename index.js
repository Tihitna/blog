const express = require("express");
const app = express();
const port = 3030;
const data =  require('./data/data.json');
app.use(express.static('public'));
app.set('view engine', "ejs")
// console.log(data.articles[1].title)
app.get('/', (req,res)=>{
    res.render("index", { news: data })
});
app.get('/about', (req,res)=>{
    res.render("about")
});
app.get('/contact', (req,res)=>{
    res.render("contact")
});
app.get('/blog', (req,res)=>{
    res.render("blog", { news: data })
});
app.get('/blog_form', (req,res)=>{
    res.render("blog_form")
});
app.get('/blog_details/:id', (req,res)=>{
    const id = req.params.id
   const news = data.articles[id];
    res.render("blog_details", {news})
});
app.listen(port, ()=>{
    console.log("Connected");
})