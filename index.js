const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
// uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true }));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "college",
        content: "I love coding"
    },
    {
        id: uuidv4(),
        username: "kaustubhkulurkar",
        content: "I persist until, I can't see far enough"
    },
    {
        id: uuidv4(),
        username: "kunalkothe",
        content: "manzil ko bhula ke jiya to kya jiya"
    }
]

app.get("/posts", (req,res) => {
    res.render("index.ejs", {posts});
});

app.get("/posts/new", (req, res) => {
    res.render(`new.ejs`);
});

app.post("/posts", (req,res) => {
    let { username, content } = req.body;
    let id = uuidv4();
    posts.push({ id, username, content })
    //console.log(req.body);
    //res.send(`post request working`);
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    //console.log(id);
    let post = posts.find((p) => id === p.id);
    console.log(post);
    //res.send(`request working`);
    res.render("show.ejs", {  post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    //console.log(newContent);
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post)
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render(`edit.ejs`, { post });
});

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
    posts = posts.filter((p) => id !== p.id);
    //res.send("Delete Success");
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`the server is at port ${port}`);
});