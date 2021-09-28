const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 8000;

const staticPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath);
app.set('views', viewsPath);

app.use(express.static(staticPath));

app.get('', (req, res) => {
    res.render('index');
});
app.get('/weather', (req, res) => {
    res.render('weather');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('*', (req, res) => {
    res.render('404error',{
        errorMsg: 'OOPS ! PAGE NOT FOUND',
    });
});
app.listen(port, () => {
    console.log(`your server is running at ${port}`);
})