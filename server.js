const { Configuration, OpenAIApi } = require('openai');
const express = require('express');
const path = require('path');
const cors = require('cors');

const port = 2137;
const app = express();
app.use(cors({ origin: 'http://localhost:2137' }));

app.use('/images',
    express.static(path.join(__dirname, 'images'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'image/png'); } }));

app.use('/scripts',
    express.static(path.join(__dirname, 'scripts'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'application/javascript'); } }));

app.use('/styles/out',
    express.static(path.join(__dirname, 'styles/out'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'text/css'); } }));

app.use('/',
    express.static(path.join(__dirname, 'pages'),
        { setHeaders: (res, path, stat) => { res.set('Content-type', 'text/html'); } }));

const configuration = new Configuration({
    organization: "org-6RaN2b0V2177llavuyry5oin",
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);
// const response = await openai.listEngines();

app.get('');

app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});