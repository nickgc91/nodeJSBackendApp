const express = require('express');

const app = express();
const bodyParser = require('body-parser')

// app.use((req, res, next) => {
//     console.log('first middleware')
//     next();
// });

// app.use((req, res, next) => {
//     console.log('second middleware');
//     res.send('<p>Assignment solved (almost)</p>');
// })

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    console.log('in another middleware');
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>The middleware that handles just /</p>');
})

app.listen(3000);