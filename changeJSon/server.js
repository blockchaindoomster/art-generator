const editJsonFile = require("edit-json-file");
const data = require('./metadata.json')


for(var i=10001; i<=10100; i++) {
  let file = editJsonFile('../output/'+ i);
  
  // file.set("description", "This is turtle for test");
  // file.unset("tokenId")
  file.set("image", "ipfs://QmcfppA1ZidRhDb7wr5WTciiZJxVAnAFa1ZgKMy9dYPGCJ/" + i + ".png")
  file.save();

  //ipfs://Qmdp2FH82kGx4XeWh3utfxpR44yJy576Xm6FCbMv3myeGB/1.png
}

console.log('success');

// [
//   {
//     "trait_type": "Background",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "trait_type": "Body",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "trait_type": "Mouth",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "trait_type": "Eyes",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "trait_type": "Hand Items",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "trait_type": "Head Wears",
//     "value": data[i-1].attributes.[0].name
//   },
//   {
//     "display_type": "date", 
//     "trait_type": "birthday", 
//     "value": data[i-1].date
//   }
// ]