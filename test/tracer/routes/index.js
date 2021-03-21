let express = require('express');
let router = express.Router();
const path = require('path');

//--------------------------------------------------------------------------------
// ROUTE: /
/* GET home page. */
//--------------------------------------------------------------------------------
router.get('/', async function(req, res, next) {

    let dc = req.cookies.dasmContext;
    if (dc) {
        res.cookie('dasmContext', dc);
        res.redirect('/index');
    }
    else {
        res.cookie('dasmContext', global.getDefaultDasmContext());
    }

    res.render('home', { title: 'WPC-DASM' }, function(err, html) {
        if (err) {
            console.log(err);
        } else {
            res.write(html);
            res.end('-----------------------WPCDASM OUTPUT---------------------');
        }
    });

});

//--------------------------------------------------------------------------------
// ROUTE: /index
//--------------------------------------------------------------------------------
router.get('/index', async function(req, res, next) {

    if (global.wpc) {

        let romstate = global.getRomState( global.wpc );
        let labels = await dasmSym.getDefinitions( );
        let labelRegions = await dasmSym.getDefinitionsByRegion( );

        let heatmap = dasmSym.getHeatmapForAllBanks();

        res.render('index', {title: romstate.romname, romstate, labelRegions: labelRegions, heatmap }, function(err, html) {

            if (err) console.log(err);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(html);
            res.end('-----------------------WPCDASM OUTPUT---------------------');
        });

    } else {
        res.redirect('/clear');
    }

});

//--------------------------------------------------------------------------------
// ROUTE: /clear
//--------------------------------------------------------------------------------
router.get('/clear', async function(req, res, next) {
    res.clearCookie('dasmContext');
    res.redirect('/');
});


//--------------------------------------------------------------------------------
// ROUTE: /load/romfilename
//--------------------------------------------------------------------------------
router.get('/load/:romfilename', async function(req, res, next) {
    let romfilename = req.params.romfilename;
    let romfilepath = path.join(__dirname, '/../../../rom/' + romfilename);
    await global.startServer(romfilepath);
    res.redirect('/index');
});

/* GET ABOUT page. */
router.get('/about', function(req, res, next) {
    res.render('about', { title: 'ABOUT - Fuel@HOME' });
});

/* GET CONTACT page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'CONTACT - Fuel@HOME' });
});

module.exports = router;