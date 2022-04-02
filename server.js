const express = require('express');
const app = express();
const port = 3000;

// Task 2
app.listen(port, () =>{
    console.log("Hello, Seattle. I'm listening..")
});

// Task 3
app.get("/frasier",(req, res)  =>  {
    res.send("Once in prep school, the Existentialist Club once named me 'Most Likely to Be");
});

//Task 4

app.get("/niles",(req, res)  =>  {
    res.send("You know, sometimes I wonder if I'm not just in psychiatry for the money");
    
});

// Task 5

app.get("/daphne",(req, res)  =>  {
    res.send("Well, have fun. I'm off to stick my head in the oven.");
    
});

// Task 7
app.get("/roz",(req, res)  =>  {
    res.send("Let me make it easy for you. Freaks! Freaks on line 1. Freaks on line 2! Freaks! Everywhere!");
    
});
// Task 9
app.get("/martin",(req, res)  =>  {
    res.send("You may think it's tough being middle-aged, but think about me. I got a son who's middle-aged.");
    
});

// Task 1 Scrappy
app.get("/Scrappy",(req, res)  =>  {
    res.send("Ywoof");
    
});

