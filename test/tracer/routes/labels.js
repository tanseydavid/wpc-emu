let express = require('express');
let router = express.Router();

//--------------------------------------------------------------------------------
// ROUTE: /labels
//--------------------------------------------------------------------------------
router.get('/', async function(req, res) {

    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );
    let labelsByBank = await dasmSym.getDefinitionsByBank( );

    let romstate = getRomState( wpc );
    let t = labelsByBank;

    res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, t }, function(err, html) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});

//--------------------------------------------------------------------------------
// ROUTE: /labels
//--------------------------------------------------------------------------------
router.get('/:region', async function(req, res) {

    let labels = await dasmSym.getDefinitions( );
    let labelRegions = await dasmSym.getDefinitionsByRegion( );
    let labelsByBank = await dasmSym.getDefinitionsByBank( );

    let region = 'Ram';
    let labelsForRegion = {};
    let regionParameter = req.params.region;
    if (regionParameter) {
        if (regionParameter.startsWith('$')) {
            region = "bank_" + regionParameter.toLowerCase().slice(1);
            labelsForRegion = labelsByBank.labelsBank[ region ];
        } else {

            debugger;

            region =
                regionParameter.charAt(0).toUpperCase() +
                regionParameter.toLowerCase().slice(1);

            if ( region == "Banks") labelsForRegion = null;
            else labelsForRegion = labelRegions.labelsRegion[region];
        }
    }

    let romstate = getRomState( wpc );
    let t = labelsByBank;

    res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, labelsByBank, labelsForRegion, region }, function(err, html) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});

//--------------------------------------------------------------------------------
// ROUTE: /labelfor
//--------------------------------------------------------------------------------
router.get('/for/:bankId/:bankAddress', async function(req, res) {

    let bankId = 0xff;
    if (!req.params.bankId) {}
    else {
        let bank = req.params.bankId.replace( '$', '0x' );
        bankId = parseInt( bank );
    }

    let bankAddress = 0x4000;
    if (!req.params.bankAddress) {}
    else {
        let address = req.params.bankAddress.replace( '$', '0x' );
        bankAddress = parseInt( address );
    }

    let labelDefinition = await dasmSym.getLabelForBankAddress( bankId, bankAddress );
    await res.json(labelDefinition);

    // res.render('labels', {title: romstate.romname, romstate, labelRegions, labels, t }, function(err, html) {
    //   if (err) console.log(err);
    //   res.writeHead(200, {'Content-Type': 'text/html'});
    //   res.write(html);
    //   res.end('-----------------------WPCDASM OUTPUT---------------------');
    // });

});


module.exports = router;