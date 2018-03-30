
const express = require('express');
// const logger = require('./middlewares/logger');
const logger = require('morgan');

const app = express();

//--------------------------------------------------------------------------------------
// app.get("/", function (req, resp) {
//     // resp.write("hello world");
//     // resp.end();
//     // or
//     resp.send("Hello World"); //text/html
// });
//--------------------------------------------------------------------------------------

// app.get("/products", function (req, resp) {
//     // load products
//     let products = [
//         { name: 'Laptop', price: 198000, description: 'New Mac Pro' },
//         { name: 'Mobile', price: 18000, description: 'New  Pro' }
//     ];
//     //resp.send(products);  // application/json
//     resp.json(products);
// })
//--------------------------------------------------------------------------------------

// app.get('/path1', function (req, resp) {
//     resp.redirect(301, "/path2");
// });

// app.get('/path2', function (req, resp) {
//     resp.send('welcome to path2');
// });

//--------------------------------------------------------------------------------------


// app.get("/", function (req, resp) {
//     // Non blocking stream-IO
//     resp.sendFile(__dirname + '/public/index.html');
// });
// app.get("/css/bootstrap.css", function (req, resp) {
//     // Non blocking stream-IO
//     resp.sendFile(__dirname + '/public/css/bootstrap.css');
// });

app.use(logger('dev'));
app.use(express.static('public'));
app.get("/menu", function (req, resp) {
    let menu = ["biryani"];
    resp.json(menu);
});




app.listen(3000, function () {
    console.log('listening on port 3000')
})
