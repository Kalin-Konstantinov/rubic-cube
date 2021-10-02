const handlebars = require('express-handlebars');
const path = require('path');

function handlebarsInitilization(app) {
    app.set('views', path.resolve(__dirname, '../views'));

    app.engine('hbs', handlebars({
        extname: 'hbs'
    }));

    app.set('view engine', 'hbs');
}

module.exports = handlebarsInitilization;