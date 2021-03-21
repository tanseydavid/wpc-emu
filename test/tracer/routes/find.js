let express = require('express');
let router = express.Router();

//--------------------------------------------------------------------------------
// ROUTE: /find
//--------------------------------------------------------------------------------
router.get('/:findval?', async function(req, res) {

    // NEW
    let findString = "Williams";
    if (!req.params.findval) {}
    else {
        // let isnum = /^\d+$/.test(val);
        findString = req.params.findval;
    }
    // NEW

    // let findresult = memorySearch(0x20, 'Williams' );
    let findresult = global.memorySearch(findString);

    // TESTING
    global.addNearbyLabelsToFindResults( findresult );

    let romstate = getRomState( wpc );

    let dc = req.cookies.dasmContext;
    if (dc) {
        dc.romFileName = 'u6-p-c.rom';
        dc.bankId = wpc.activeRomBank;
        res.cookie('dasmContext', dc);
    }

    debugger;

    res.render('find', {title: 'gw_pc', romstate, f: findresult }, function(err, html) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(html);
        res.end('-----------------------WPCDASM OUTPUT---------------------');
    });

});


module.exports = router;