let express = require('express');
let router = express.Router();

// TESTING PARAM routes
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
// ROUTE: /dump/$20/$4000
//--------------------------------------------------------------------------------
router.get('/:bank/:start/:bytesperline?', async function(req, res) {

    let startAddress = 0x4000;
    if (!req.params.start) {}
    else {
        let start = req.params.start.replace( '$', '0x' );
        startAddress = parseInt( start );
    }

    let bytesPerLine = 16;
    if (!req.params.bytesperline) {}
    else {
        let bytesPer = req.params.bytesperline.replace( '$', '0x' );
        bytesPerLine = parseInt( bytesPer );
    }

    let dumpresult = await global.memoryDump( req.bankId, startAddress, bytesPerLine, 32 );
    let dc = req.cookies.dasmContext;
    if (dc) {
        // dc.romFileName = 'u6-p-c.rom';
        dc.bankId = req.bankId;
        res.cookie('dasmContext', dc);
    }

    let navstate = {};
    navstate.startAddress = startAddress;
    navstate.endAddress = startAddress + (bytesPerLine * 32) - 1;
    navstate.bankId = req.bankId;
    navstate.linkNextDump = '/dump/$' + d2h( req.bankId ) + '/$' + d2h_16((startAddress + (bytesPerLine * 32)));
    navstate.linkPreviousDump = '/dump/$' + d2h( req.bankId ) + '/$' + d2h_16((startAddress - (bytesPerLine * 32)));

    let romstate = getRomState( wpc );
    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );

    res.render('dump', { romstate, dumpresult, navstate, labelRegions }, function(err, html) {
        if (err) console.log(err);
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});


module.exports = router;