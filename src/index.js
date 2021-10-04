const express = require('express');
const settings = require('./config/config');
const handlebarsInitilization = require('./config/handlebars');
const router = require('./routes');
const app = express();

handlebarsInitilization(app);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/static'));

app.use(router);

app.listen(settings.PORT, () => { console.log(`Server is runing on port http://localhost:${settings.PORT}... \nTo stop the server press ctrl + C.`) });