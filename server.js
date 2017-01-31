/**
 * Created by devon on 2017-01-30.
 */
// Connect and URL libraries
let connect = require('connect');
let url = require('url');

// Create a new Connect object
let app = connect();

let lab2 = function (req, res, next) {

    // parse the query string
    let qs = url.parse(req.url, true).query;

    // get the math operation and values
    let method = qs.method;
    let valueX = qs.x;
    let valueY = qs.y;
    let result = 0;

    if (method === 'add') {
        result = valueX + ' + ' + valueY + ' = ' + (parseFloat(valueX) + parseFloat(valueY));
    } else if (method === 'subtract') {
        result = valueX + ' - ' + valueY + ' = ' + (parseFloat(valueX) - parseFloat(valueY));
    } else if (method === 'multiply') {
        result = valueX + ' * ' + valueY + ' = ' + (parseFloat(valueX) * parseFloat(valueY));
    } else if (method === 'divide') {
        result = valueX + ' / ' + valueY + ' = ' + (parseFloat(valueX) / parseFloat(valueY));
    } else {
        result = '<img src="https://s-media-cache-ak0.pinimg.com/736x/46/ca/8d/46ca8d449046c2ded52dd73b2a8a213f.jpg" />'
    }

    res.end(
        '<h1>The Query String Calculator</h1><br />' +
        result
    );
};

// create mapping to virtual page
app.use('/', lab2);

// Connect http server
app.listen(3000);
console.log('Connect server running on port 3000');