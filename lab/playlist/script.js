var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keyweomR3DyiEOj84",
}).base("appRg418XISw0Yzad");


base("playlist")
  .select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 5,
    view: "Grid view",
  })
  .eachPage(
    function page(records, fetchNextPage) {
      // This function (`page`) will get called for each page of records.

      records.forEach(function (song) {
        console.log("Retrieved", song);
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
