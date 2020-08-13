//! imports
const express = require('express')
const server = express()
const nunjucks = require('nunjucks');

const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageConfirmation } = require('./pages')

// static files (css, html, images)
server.use(express.static("public"));

// req.body retrive data
server.use(express.urlencoded({ extended: true }))

// nunjucks config.
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
});

//! application routes
server.get("/", pageLanding);
server.get("/study", pageStudy);
server.get("/give-classes", pageGiveClasses);
server.post("/save-classes", saveClasses)
server.get("/confirmation", pageConfirmation)

// server port
server.listen(5500);
