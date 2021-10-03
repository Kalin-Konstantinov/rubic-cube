const express = require('express');
const handlebarsInitilization = require('./config/handlebars');

const app = express();
const port = 5000;

handlebarsInitilization(app);
app.use(express.static('./src/static'));

app.get('/', (req, res) => {
    res.render('index');
});

app.get('/create', (req, res) => {
    res.render('create');
});


app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/details/:id', (req, res) => {
    res.render('details');
});

app.listen(port, () => { console.log(`Server is runing on port http://localhost:${port}... \nTo stop the server press ctrl + C.`) });