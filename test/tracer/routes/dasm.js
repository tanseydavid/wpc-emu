let express = require('express');
let router = express.Router();

// TESTING PARAM routes
// router.param('bank', global.paramHandler_bank);
router.param('bank', function(req,res,next,bank){
    req.bankId = 0x3d;
    if (!req.params.bank) {}
    else {
        let bank = req.params.bank.replace( '$', '0x' );
        req.bankId = parseInt( bank );
    }
    next();
});


//--------------------------------------------------------------------------------
// ROUTE: /dasm/$20/$4000/$8000
//--------------------------------------------------------------------------------
router.get('/:bank/:start/:end?', async function(req, res) {

    let startAddress = 0x4000;
    if (!req.params.start) {}
    else {
        let start = req.params.start.replace( '$', '0x' );
        startAddress = parseInt( start );
    }

    let endAddress = startAddress + 0xff;
    if (!req.params.end) {}
    else {
        let end = req.params.end.replace( '$', '0x' );
        endAddress = parseInt( end );
    }

    let labelRegions = await dasmSym.getDefinitionsByRegion( );
    // let dasmresult = await global.dasmBank( bankId, startAddress, endAddress);
    let dasmresult = await global.dasmBank( req.bankId, startAddress, endAddress);

    // let dc = req.cookies.dasmContext;
    // if (dc) {
    //     dc.romFileName = 'u6-p-c.rom';
    //     dc.bankId = bankId;
    //     res.cookie('dasmContext', dc);
    // }

    let navstate = {};
    navstate.startAddress = startAddress;
    navstate.endAddress = endAddress;
    // navstate.bankId = bankId;
    navstate.bankId = req.bankId;
    navstate.linkPreviousDump = '/dasm/$' + d2h( req.bankId ) + '/$' + d2h_16(startAddress - ( endAddress - startAddress + 1));
    // navstate.linkPreviousDump = '/dasm/$' + d2h( bankId ) + '/$' + d2h_16(startAddress - ( endAddress - startAddress + 1));
    navstate.linkNextDump = '/dasm/$' + d2h( req.bankId ) + '/$' + d2h_16((endAddress + 1));
    // navstate.linkNextDump = '/dasm/$' + d2h( bankId ) + '/$' + d2h_16((endAddress + 1));
    navstate.labelsNearby = dasmSym.getDefinitionsNearbyBankAddress( req.bankId, startAddress, 3 );
    // navstate.labelsNearby = dasmSym.getDefinitionsNearbyBankAddress( bankId, startAddress, 5 );

    let romstate = getRomState( global.wpc );

    res.render('dasm', {romstate, dasmresult, labelRegions, navstate }, function(err, html) {
        if (err) console.log(err);
        // res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});

//--------------------------------------------------------------------------------
// ROUTE: /dasm/$4000/$8000
//--------------------------------------------------------------------------------
router.get('/:start/:end', async function(req, res) {

    var start = req.params.start.replace( '$', '0x' );
    var end = req.params.end.replace( '$', '0x' );

    var startAddress = parseInt( start );
    var endAddress = end ? parseInt( end ) : startAddress + 0xff;

    let dasmResult2 = await dasm( startAddress, endAddress);

    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<h2>ROM: gw_pc</h2>');
    res.write('<pre>' + dasmResult2 + '</pre>' );
    res.end('-----------------------WPCDASM OUTPUT---------------------');

});

module.exports = router;