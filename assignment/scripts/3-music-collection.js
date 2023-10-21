console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line
function addToCollection(collection, title, artist, yearPublished){
  let album = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  };
  collection.push(album);
  return album;
}

function showCollection(collection){
  for(let i =0; i<collection.length; i++){
    console.log(`${collection.title} by ${collection.artist}, published in ${collection.year}`);
  }
}

// Testing addToCollection
let myCollection = [];
console.log("Adding albums to my collection.");
console.log(addToCollection(myCollection, 'Minecraft, Volume Alpha', 'C418', 2011));
console.log(addToCollection(myCollection, 'Rumours', 'Fleetwood Mac', 1977));
console.log(addToCollection(myCollection, 'Pure Heroine', 'Lorde', 2014));
console.log(addToCollection(myCollection, 'For Emma, Forever Ago', 'Bon Iver', 2008));
console.log(addToCollection(myCollection, 'Circles', 'Mac Miller', 2020));
console.log(addToCollection(myCollection, 'Saturday Night Wrist', 'Deftones', 2006));
console.log("My collection:", myCollection);

// Testing showCollection






// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
