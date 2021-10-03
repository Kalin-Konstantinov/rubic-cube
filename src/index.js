const express = require('express');
const handlebarsInitilization = require('./config/handlebars');
const router = require('./routes');
const app = express();
const port = 5000;

handlebarsInitilization(app);
app.use(express.static('./src/static'));

app.use(router);







app.listen(port, () => { console.log(`Server is runing on port http://localhost:${port}... \nTo stop the server press ctrl + C.`) });