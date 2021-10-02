const express = require('express');
const handlebarsInitilization = require('./config/handlebars');

const app = express();
const port = 5000;

handlebarsInitilization(app);

app.all('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => { console.log(`Server is runing on port http://localhost:${port}... \nTo stop the server press ctrl + C.`) });