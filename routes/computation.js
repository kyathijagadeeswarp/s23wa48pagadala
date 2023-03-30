var express = require('express');
var router = express.Router();
router.get('/', function(req, res, next) {
    var d1 = Math.floor(Math.random() * 10);
    var d2 = Math.floor(Math.random() * 02);
    var d3 = Math.floor(Math.random() * 10);
    var cosFunction = Math.log2(d1);
    var asinFunction = Math.cosh(d2);
    var asinhFunction = Math.floor(d3);
    res.render('computation',
                {
                    title: 'Kyathi Jagadeeswar Pagadala functions for computations. ',
                    d1: d1,
                    d2: d2,
                    d3: d3,
                    log2: log2Function,
                    cosh: coshFunction,
                    floor: floorFunction
                });
});
module.exports = router;