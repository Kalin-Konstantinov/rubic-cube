const express = require('express');
const settings = require('./config/config');
const initDatabase = require('./config/database');
const handlebarsInitilization = require('./config/handlebars');
const router = require('./routes');
const app = express();

handlebarsInitilization(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/static'));

app.use(router);

initDatabase(settings.DB_CONNECTION_STRING)
    .then(x => {
        console.log('Database connected successfully.');
        app.listen(settings.PORT, () => { console.log(`Server is runing on port http://localhost:${settings.PORT}... \nTo stop the server press ctrl + C.`) });
    })
    .catch(err => { console.error('Filed to connect to database' ,err)});
