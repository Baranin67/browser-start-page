const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 2137;
const app = express();
app.use(cors({ origin: 'http://localhost:2137' }));

app.use('/images',
    express.static(path.join(__dirname, 'images'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'image/png'); } }));

app.use('/configs',
    express.static(path.join(__dirname, 'configs'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'application/json'); } }));

app.use('/scripts',
    express.static(path.join(__dirname, 'scripts'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'application/javascript'); } }));

app.use('/styles/out',
    express.static(path.join(__dirname, 'styles', 'out'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'text/css'); } }));

app.use('/',
    express.static(path.join(__dirname, 'pages'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'text/html'); } }));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});