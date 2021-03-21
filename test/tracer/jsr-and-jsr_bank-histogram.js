debugger;

const path = require('path');
let fs = require('fs');
let binary = fs.readFileSync(path.join(__dirname, '/../../rom/fb_g11.ROM'));
//binary = fs.readFileSync(path.join(__dirname, '/../../rom/u6-p-c.rom'));
// binary = fs.readFileSync('./roms/fb_g11.3_1');
let totals = {};

// process.stdout.write(binary.slice(0, 48));
binary.forEach(function (value, i) {

  if ( value === 0xbd ) {

    let jumpaddress = binary[i + 1] * 256 + binary[i + 2];
    // console.log(jumpaddress.toString(16));

    if (totals.hasOwnProperty("$" + jumpaddress.toString(16))) {
      // console.log('totals has xyz');
      totals["$" + jumpaddress.toString(16)] = totals["$" + jumpaddress.toString(16)] + 1;
    } else {
      totals["$" + jumpaddress.toString(16)] = 1;
      //item["xyz"] = 'something'; You can also use this
    }
  }

});

// Create items array
let items = Object.keys(totals).map(function(key) {
  return [key, totals[key]];
});

// Sort the array based on the second element
items.sort(function(first, second) {
  return second[1] - first[1];
});

// Create a new array with only the first 5 items
console.log(items.slice(0, 100));
console.log(items.slice(101, 200));
console.log(items.slice(201, 300));
console.log(items.slice(301, 400));
console.log(items.slice(401, 500));
console.log(items.slice(501, 600));
console.log(items.slice(601, 700));
console.log(items.slice(701, 800));
console.log(items.slice(801, 900));
console.log(items.slice(901, 1000));
console.log(items.slice(1001, 1100));

//

// binary = fs.readFileSync('./roms/u6-p-c.rom');
////binary = fs.readFileSync(path.join(__dirname, '/../../rom/fb_g11.ROM'));
totals = {};
//
// // process.stdout.write(binary.slice(0, 48));
binary.forEach(function (value, i) {

  // GW:  
  // if ( value === 0xbd && binary[i + 1] === 0x88 && binary[i + 2] === 0xcf) {
  // NBAF: 
  if ( value === 0xbd && binary[i + 1] === 0x89 && binary[i + 2] === 0xf0) {

    // jsr $88cf  == jsr_bank()
    // jsr $89f0  == jsr_bank()

    let bankaddress = binary[i + 3] * 256 + binary[i + 4];
    let bankid = binary[i + 5];
    let bkey = "$" + bankaddress.toString(16) + ", $" + bankid.toString(16)
    // console.log(bkey);

    if (totals.hasOwnProperty(bkey)) {
      // console.log('totals has xyz');
      totals[bkey] = totals[bkey] + 1;
    } else {
      totals[bkey] = 1;
    }
  }

});

// create items array
let items_B = Object.keys(totals).map(function(key) {
  return [key, totals[key]];
});

// sort the array based on the second element
items_B.sort(function(first, second) {
  return second[1] - first[1];
});

// create a new array with only the first 5 items+B
console.log(items_B.slice(0, 100));
console.log(items_B.slice(101, 200));
console.log(items_B.slice(201, 300));
console.log(items_B.slice(301, 400));
console.log(items_B.slice(401, 500));
console.log(items_B.slice(501, 600));
console.log(items_B.slice(601, 700));
console.log(items_B.slice(701, 800));
console.log(items_B.slice(801, 900));
console.log(items_B.slice(901, 1000));
console.log(items_B.slice(1001, 1100));
