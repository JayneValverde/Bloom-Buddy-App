const express = require('express');

const app = express(); 
const PORT = process.env.PORT || 3001;

// For Testing Purposes 
app.get("/", (req, res) => {
    res.send("<h1>HELLLOOOO WOOOORLD</h1>");
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});