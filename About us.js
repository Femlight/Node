const express = require('express');
const dotenv = require('dotenv');


dotenv.config();

const app = express();
const port = process.env.PORT;

app.get('/About-us ', (req, res) => {
    res.send("good boy ");
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});

