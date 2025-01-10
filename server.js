const express = require('express');
const bodyParser = require('body-parser');

//import dependency modules 
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 
// Middleware function to log request details
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

