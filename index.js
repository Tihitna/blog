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
app.listen(port, ()=>{
    console.log("Connected");
})