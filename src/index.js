const express = require('express');
const app = express();
const port = 5000;

app.all('/', (req, res) => {
    res.send('Its working yeyy!!')
})

app.listen(port, () => { console.log(`Server is runing on port http://localhost:${port}... \nTo stop the server, press ctr + C.`) });