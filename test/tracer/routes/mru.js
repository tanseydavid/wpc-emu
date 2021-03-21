let express = require('express');
let router = express.Router();

//--------------------------------------------------------------------------------
// ROUTE: /mru
//--------------------------------------------------------------------------------
router.get('/', async function(req, res) {

    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );
    let labelsByBank = await dasmSym.getDefinitionsByBank( );

    let romstate = getRomState( global.wpc );
    let t = labelsByBank;

    res.render('mru', {title: 'test', romstate, labelRegions, labels, t }, function(err, html) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end('');
    });

});

module.exports = router;