var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keybrkcrqXEWHknn9", /*<-- my key!*/
}).base("appszKZICWaWWmUkz");

students = ['','','']

students.forEach(item)

function myLoop(index) {
  console.log("index", index)
}

base("playlist")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 50,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (song, index) {
        console.log("Retrieved", song.fields, artists);
        let grid = document.querySelector("grid")

        let griditems = document.querySelector(".grid-items")

        gridItem = document.createElement("div");
        console.log('gridItem');
        gridItem.classList.add("grid-Item");
        gridItem.setAttribute("data-year", song.fields.title);
        gridItem.setAttribute("dataytitle", song.fields.title)

      });

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();
    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      }
    }
  );
