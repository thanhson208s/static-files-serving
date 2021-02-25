const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
// const port = 3000;

app.get('/*', (req, res) => {
    console.log(path.dirname(req.url), path.basename(req.url));
    res.download('staticLive' + req.url);
});

// app.use(express.static('staticLive'));

app.listen(port, () => {
    console.log('Server started on port ' + port);
});