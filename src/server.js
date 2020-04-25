import express from 'express';
import React from 'react';
import App from '../dist/ssr/app';
import { StaticRouter } from 'react-router';
import reactDOMServer from 'react-dom/server';

const app = express();

app.use(express.static('dist'));
app.use('/images', express.static('images'));

//params: request and response
app.get('*', (req, res) => {

    const html = reactDOMServer.renderToString(
        <StaticRouter
        context={{
            name: 'Gerardo'
        }}
        >
            <App />
        </StaticRouter>
    )
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Platzi Video</title>
                <link rel="stylesheet" href="/css/app.css">
            </head>
            <body>
                <div id="home-container">Hola Mundo ${html}</div>
                <div id="modal-container"></div>
                <!-- <script src="http://localhost:9000/js/app.js"></script> -->
                <script src="/js/app.js"></script>
            </body>
        </html>
    `);
    res.end();
});

app.listen(3000);

console.log('El server prendió en el puerto 3000')