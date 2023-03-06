const express = require('express');
const path = require('path');

const port = 2137;
const app = express();

app.use('/images',
    express.static(path.join(__dirname, 'images'),
        { setHeaders: res => { res.set('Content-type', 'image/png'); } }));

app.use('/configs',
    express.static(path.join(__dirname, 'configs'),
        { setHeaders: res => { res.set('Content-type', 'application/json'); } }));

app.use('/scripts',
    express.static(path.join(__dirname, 'scripts'),
        { setHeaders: res => { res.set('Content-type', 'application/javascript'); } }));

app.use('/styles/out',
    express.static(path.join(__dirname, 'styles', 'out'),
        { setHeaders: res => { res.set('Content-type', 'text/css'); } }));

app.use('/',
    express.static(path.join(__dirname, 'pages'),
        { setHeaders: res => { res.set('Content-type', 'text/html'); } }));

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});