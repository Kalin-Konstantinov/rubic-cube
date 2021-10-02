const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5000;

app.set('views', path.resolve('./src/views'));

app.engine('hbs', handlebars({
    extend: 'hbs'
}));

app.set('view engine', 'hbs');

app.all('/', (req, res) => {
    res.render('index', { layout: false });
})

app.listen(port, () => { console.log(`Server is runing on port http://localhost:${port}... \nTo stop the server, press ctr + C.`) });