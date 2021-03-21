let express = require('express');
let router = express.Router();

//--------------------------------------------------------------------------------
// ROUTE: /CHART/$20/$4000
//--------------------------------------------------------------------------------
router.get('/heatmap/:bank?', async function(req, res) {

    let bankId = 0x3d;
    if (!req.params.bank) {}
    else {
        let bank = req.params.bank.replace( '$', '0x' );
        bankId = parseInt( bank );
    }

    let dc = req.cookies.dasmContext;
    if (dc) {
        dc.romFileName = 'u6-p-c.rom';
        dc.bankId = bankId;
        res.cookie('dasmContext', dc);
    }

    let romstate = getRomState( wpc );
    // let linkNextDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress + (bytesPerLine * 32)));
    // let linkPreviousDump = '/dump/$' + d2h( bankId ) + '/$' + d2h_16((startAddress - (bytesPerLine * 32)));

    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );
    let heatmap = dasmSym.getHeatmapForAllBanks();

    res.render('chart', { romstate, labelRegions, heatmap }, function(err, html) {
        if (err) console.log(err);
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});


module.exports = router;