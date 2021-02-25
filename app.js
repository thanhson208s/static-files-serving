const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use(express.static('staticLive'));

app.listen(port, () => {
    console.log('Server started on port ' + PORT);
});