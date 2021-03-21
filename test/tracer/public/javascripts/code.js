document.addEventListener("DOMContentLoaded", async function(){

    // Handler when the DOM is fully loaded
    mru.RefreshUI();

    'use strict';
    let dialog = document.querySelector('#dialog');
    if (dialog && ! dialog.showModal) {
        dialogPolyfill.registerDialog(dialog);
    }
    if (dialog) {
        dialog.querySelector('button:not([disabled])').addEventListener('click', function () {
            dialog.close();
        });
    }

    let dialogButton = document.querySelector('.dialog-button');
    if (dialogButton) {
        dialogButton.addEventListener('click', async function () {
            dialog.showModal();
        });
    }

    let chartDiv = document.querySelector('#chart');
    if (chartDiv) {
        apexHeatmap();
    }
    let heatmapCoverageAllBanksDiv = document.querySelector('#heatmap');
    if (heatmapCoverageAllBanksDiv) {
        apexHeatmapCoverageAllBanks( 350 );
    }

});

document.addEventListener("click", (e) => {
    let element = e.target;
    if (element.classList.contains("mdl-menu__item")) {

        let parentId = element.parentElement.getAttribute("for");
        let sourceElement = document.getElementById(parentId);

        let romToLoad = sourceElement.dataset.filename;
        let mruIndex = sourceElement.dataset.mruindex;
        let urlLoad ='/load/' + romToLoad;

        let labelAddress = sourceElement.dataset.labeladdress;
        let urlFind ='/find/' + labelAddress;
        let labelBankId = sourceElement.dataset.labelbankid;
        let urlDasm ='/dasm/$' + labelBankId + '/$' + labelAddress;
        let urlHexDump ='/dump/$' + labelBankId + '/$' + labelAddress;

        switch(element.innerText){
            case "Open":
                mru.SetMostRecent( romToLoad );
                window.open(urlLoad,"_self");
                break;
            case "Open in new tab":
                mru.SetMostRecent( romToLoad );
                window.open(urlLoad,"_blank");
                break;
            case "Open in new window":
                mru.SetMostRecent( romToLoad );
                window.open(urlLoad,"_blank", "location=yes,height=600,width=800,scrollbars=yes,status=yes");
                break;
            case "Remove from Recent list":
                mru.Remove(mruIndex);
                break;
            case "Find all occurrences":
                window.open(urlFind,"_self");
                break;
            case "DASM":
                window.open(urlDasm,"_self");
                break;
            case "HEX DUMP":
                window.open(urlHexDump,"_self");
                break;

        }
    }

});

document.addEventListener("mouseup", async (e) => {

    /* ... */
    let element = e.target;
    if(element.tagName.toLowerCase() == 'pre' && element.id == 'dasm'){
        let selection = getSelectedText();
        if (selection != '' && selection.length <= 4) {
            let dialog = document.querySelector('dialog');
            if (! dialog.showModal) {
                dialogPolyfill.registerDialog(dialog);
            }

            //
            let bankId = currentBankId;
            let bankIdStr = bankId.toString( 16 );

            await getLabelForBankAddress( currentBankId, selection, async function( currentBankId, selection, data ) {
                dialog.showModal();

                let labeladdressElement = document.getElementById('labeladdress');
                labeladdressElement.textContent =  "$" + selection + ", $" + bankIdStr;
                let labeltextElement = document.getElementById('j-labeltext');

                if ( parseInt( selection, 16 ) <= 0x7fff ) {
                    let defaultLabel = "bnk_"  + bankIdStr + "_" + selection;
                    let labelValue = data ? data.label : defaultLabel;
                    labeltextElement.value = labelValue;
                    console.log( "dasmEntries.addBankLabel( 0x" + selection + ", 0x" + bankIdStr + ", '" + labelValue + "' );" );
                } else if (parseInt( selection, 16 ) >= 0x8000 ) {
                    let defaultLabel = "sys_" + selection;
                    let labelValue = data ? data.label : defaultLabel;
                    labeltextElement.value = labelValue
                    console.log( "dasmEntries.add( 0x" + selection + ", 0, '" + labeltextElement.value + "' );" );
                }

            });
            //
        }
    }

});

// Instead, select the first instance of .box
// $('pre#dasm').mouseup(function() {
//     alert(getSelectedText());
// });
function getDefaultRomFiles() {
return [
        { filename: "gw_pc.zip", id: "gw_pc" },
        { filename: "nbaf_31.zip", id: "nbaf_31" },
        { filename: "cv_20h.zip", id: "cv_20" },
        { filename: "dd_p7.zip", id: "dd_p7" },
        { filename: "taf_l5.zip", id: "taf_l5" },
        { filename: "tom_13.zip", id: "tom_13" }
    ];
}

function getSelectedText() {
    if (window.getSelection) {
        return window.getSelection().toString();
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
    return '';
}

let dialog = document.querySelector('dialog');
let showDialogButton = document.querySelector('#show-dialog');
if (dialog && !dialog.showModal) {
    dialogPolyfill.registerDialog(dialog);
}

if (showDialogButton) {
    showDialogButton.addEventListener('click', function() {
        dialog.showModal();
    });
}
if (dialog) {
    dialog.querySelector('.close').addEventListener('click', function() {
        dialog.close();
    });
}

mru = {};
mru.RomFiles = [];
mru.SetMostRecent = function( filename ) {
    this.Get();
    let matchIndex = this.RomFiles.findIndex(x => x.filename === filename );
    if (matchIndex){
        let saveItem = this.RomFiles[ matchIndex ];
        this.Remove( matchIndex );
        this.RomFiles.unshift( saveItem );
        this.Save();
        this.RefreshUI();
    }
};
mru.Save = function() {
    localStorage.setItem('mruListRomFiles', JSON.stringify(this.RomFiles));
};
mru.Get = function() {
    this.RomFiles = JSON.parse(localStorage.getItem("mruListRomFiles"));
    localStorage.setItem('mruListRomFiles', JSON.stringify(this.RomFiles));
};
mru.Remove = function(index) {
    if (index >= 0 && index <this.RomFiles.length){
        this.RomFiles.splice(index, 1);
        this.Save();
        this.RefreshUI();
    }
};
mru.Reset = function() {
    this.RomFiles = getDefaultRomFiles();
    this.Save();
    this.RefreshUI();
}
mru.RefreshUI = function() {
    let html  = mruTemplate( { mrulist: mru.RomFiles, romfiles: getDefaultRomFiles() } );
    let target = document.getElementById("mrulist");
    if (target) {
        target.innerHTML = html;
    }

    // Expand all new MDL elements
    componentHandler.upgradeDom();
}

redirectToDasm = function(bankId, address){
    let url ='/dasm/$' + d2h(bankId) + "/$" + d2h_16(address);
    window.open(url,"_self");
}

redirectToLabelsRegion = function(region){
    let url ='/labels/' + region;
    window.open(url,"_self");
}

redirectToHeatmap = function(){
    let url ='/chart/heatmap/$20/$4000';
    window.open(url,"_self");
}

redirectToClear = function(){
    let url ='/clear';
    window.open(url,"_self");
}

mru.Get();

function d2h(d) {
    return (d / 256 + 1 / 512).toString(16).substring(2, 4);
}

function d2h_16(d) {
    return d.toString(16).toUpperCase();
}

function apexHeatmapCoverageAllBanks() {
    var options = {
        series: [
            {
                name: '$20-XXX',
                data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
            },
            {
                name: '$2a',
                data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
            },
            {
                name: '$30',
                data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
            },
            {
                name: '$3A',
                data: [ .05, .99, .5, .05, .05, .05, .05, .05 ],
            }
        ],
        chart: {
            height: 540,
            type: 'heatmap',
            events: {
                click: function (event, chartContext, config) {
                    debugger;
                    let el = event.target;
                    let seriesIndex = parseInt(el.getAttribute("i"));
                    let dataPointIndex = parseInt(el.getAttribute("j"));

                    let bankIdString = config.globals.seriesNames[seriesIndex];

                    let url = "/dasm/" + bankIdString + "/$4000/$40ff";
                    window.location.href = url;
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                let baseVal =  parseInt( '0x' + w.config.series[seriesIndex].name.substring(1));
                return '$' + d2h( baseVal + dataPointIndex );
            }
        },
        colors: ["#008FFB"],
        title: {
            text: 'Known Address coverage - All Banks'
        },
        tooltip: {
            enabled: true,
            y: {
                title: {
                    formatter: function( value, { series, seriesIndex, dataPointIndex, w }) {
                        let baseVal =  parseInt( '0x' + w.config.series[seriesIndex].name.substring(1));
                        return '$' + d2h( baseVal + dataPointIndex );
                    }
                }
            }
        },
        xaxis: {
            type: 'category',
            categories: ['+$00', '+$01', '+$02', '+$03', '+$04', '+$05', '+$06', '+$07']
        },
    };
    let heatmapCoverageAllBanks = new ApexCharts(document.querySelector("#heatmap"), options);
    heatmapCoverageAllBanks.render();
}

function getChartOptionsHeatmapCoverageAllBank(series) {

    let opts = {
        series: series,
        chart: {
            height: 540,
            type: 'heatmap',
            events: {
                click: function (event, chartContext, config) {

                    let el = event.target;
                    let seriesIndex = parseInt(el.getAttribute("i"));
                    let dataPointIndex = parseInt(el.getAttribute("j"));
                    let seriesIndexString = config.globals.seriesNames[seriesIndex];
                    let seriesIndexVal = parseInt( seriesIndexString.replace( '$', '0x'), 16 );
                    let bankId  = seriesIndexVal + dataPointIndex;

                    let url = "/dasm/$" + d2h( bankId ) + "/$4000/$40ff";
                    window.location.href = url;
                }
            }
        },
        dataLabels: {
            enabled: true,
            formatter: function(value, { seriesIndex, dataPointIndex, w }) {
                let baseVal =  parseInt( '0x' + w.config.series[seriesIndex].name.substring(1));
                return '$' + d2h( baseVal + dataPointIndex );
            }
        },
        colors: ["#008FFB"],
        title: {
            text: 'Known Address coverage - All Banks'
        },
        tooltip: {
            enabled: true,
            y: {
                title: {
                    formatter: function( value, { series, seriesIndex, dataPointIndex, w }) {

                        let baseVal =  parseInt( '0x' + w.config.series[seriesIndex].name.substring(1));
                        return '$' + d2h( baseVal + dataPointIndex );
                        // return value
                    }

                    // (seriesName) => seriesName + 'XXX',
                }
            }
        },
        xaxis: {
            type: 'category',
            categories: ['+$00', '+$01', '+$02', '+$03', '+$04', '+$05', '+$06', '+$07']
        },

    };

    return opts;


}

apexHeatmapCoverageAllBanks = function( height ) {

    let opts = getChartOptionsHeatmapCoverageAllBank(hm);
    opts.chart.height = height;
    opts.chart.width = height;
    let heatmapCoverageAllBanks = new ApexCharts(document.querySelector("#heatmap"), opts);
    heatmapCoverageAllBanks.render();
}

function apexHeatmap() {

    var options = {
        series: [
            {
                name: '$7800',
                data: [ 10, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$7000',
                data: [ 10, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$6800',
                data: [ 10, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$6000',
                data: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$5800',
                data: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$5000',
                data: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$4800',
                data: [ 0, 1, 2, 3, 4, 5, 6, 7 ],
            },
            {
                name: '$4000',
                data: [ 1, 1, 1, 1, 1, 1, 1, 1 ],
            }
        ],
        chart: {
            height: 540,
            type: 'heatmap',
        },
        dataLabels: {
            enabled: false
        },
        colors: ["#008FFB"],
        title: {
            text: 'Known Address coverage - Bank $3D'
        },
        xaxis: {
            type: 'category',
            categories: ['+$00', '+$100', '+$200', '+$300', '+$400', '+$500', '+$600', '+$700']
        },

    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // var options = {
    //     series: data,
    //     chart: {
    //         height: 450,
    //         type: 'heatmap',
    //     },
    //     dataLabels: {
    //         enabled: false
    //     },
    //     colors: colors,
    //     xaxis: {
    //         type: 'category',
    //         categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30']
    //     },
    //     title: {
    //         text: 'HeatMap Chart (Different color shades for each series)'
    //     },
    //     grid: {
    //         padding: {
    //             right: 20
    //         }
    //     }
    // };
    //
    // var chart = new ApexCharts(document.querySelector("#chart"), options);
    // chart.render();
}

async function getLabelForBankAddress( bankId, bankAddress, onloadCallback) {

    let ba = parseInt ( "0x"  + bankAddress );
    let url = 'http://local.wpcdasm.com:3000/labels/for/$' + d2h( bankId ) + '/$' + d2h_16( ba );

    ajax_get( url, function(data) {
        onloadCallback( bankId, bankAddress, data );
    })

}

function ajax_get(url, callback) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            // console.log('responseText:' + xmlhttp.responseText);
            try {
                var data = '';
                if (xmlhttp.responseText != '') {
                    data = JSON.parse(xmlhttp.responseText);
                }
            } catch(err) {
                console.log(err.message + " in " + xmlhttp.responseText);
                callback();
                return;
            }
            callback(data);
        }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}