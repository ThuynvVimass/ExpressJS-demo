

const express = require('express');
const path = require('path');
const morgan = require('morgan');
const exphbs = require('express-handlebars');

const app = express();
const port = 3003;

app.use(express.static(path.join(__dirname, 'public')))

app.use(morgan('combined'));
app.engine('hbs', exphbs.engine({extname:'.hbs'}));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/new', (req, res) => {
    res.render('new');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})