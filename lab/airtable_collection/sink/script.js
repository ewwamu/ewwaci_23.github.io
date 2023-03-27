var Airtable = require("airtable");
var base = new Airtable({
  apiKey: "keybrkcrqXEWHknn9",
}).base("appszKZICWaWWmUkz");

function filterItems(type, filter){
  let allItems = Array.from(document.querySelectorAll('.airtable-item'))

  let filteredItems = allItems.filter((item) => item.dataset.name == '3D Curl Bomb Hair Brush')

  console.log(filteredItems);
}

filterItems()

let origins = [];

base("Table 1")
  .select({
    maxRecords: 50,
    view: "Grid view",
  })

  .eachPage(
    function page(records, fetchNextPage) {

      // This function (`page`) will get called for each page of records.

      records.forEach(function (record, index) {
          console.log("record", record.fields);

          record.fields.origins.forEach((origin) => {
            if (!origins.includes(origin) != true) origins.push(origin)
          });
          
          let container = document.querySelector(".container");

          let airtableItem

          airtableItem = document.createElement("div");
          airtableItem.classList.add('airtable-item');
          airtableItem.setAttribute("data-title", record.fields.name);
        
          let recordTitle = document.createElement('h2')
          recordTitle.classList.add('airtable-item-name')
          recordTitle.innerHTML = record.fields.name;
          airtableItem.append(recordTitle);



          let recordImage = document.createElement('img')
          recordImage.classList.add('airtable-item--brushesCombs')
          recordImage.src = record.fields.brushesCombs[0].url
          airtableItem.append(recordImage);


          container.append(airtableItem)


          
          //console.log(container)
                  //var brushesCombs = document.createElement("img");
                  //brushesCombs.classList.add("brushesCombs-image");
                  //brushesCombs.src = record.fields.brushesCombs[0].url;
                  //document.body.appendChild(brushesCombs);
                  
                  //var brushName = document.createElement("span");
                  //brushName.innerHTML = record.fields.brushName;
                  //document.body.appendChild(brushName);
                }
              );
        

      // To fetch the next page of records, call `fetchNextPage`.
      // If there are more records, `page` will get called again.
      // If there are no more records, `done` will get called.
      fetchNextPage();


    },
    function done(err) {
      if (err) {
        console.error(err);
        return;
      } else {

        let allItems = Array.from(document.querySelectorAll(".airtable-item"))

        console.log('years', years);

        function sortItems(e) {
          document
            .querySelectorAll(".airtable-item.is-open")
            .forEach((year) => {
              item.classList.remove("is-open");

          let filteredItems = Array.from(
            document.querySelectorAll(".airtable-item")
          );
          let sortedItems;
            });
        }

        // years.forEach((year) => {
        //   let filterBtn = document.createElement("button")
        //   filterBtn.classList.add('filter-btn')
        //   filterBtn.innerHTML = origin;
        //   document.querySelector('.filters').append(filterBtn);

        //   filterBtn.addEventListener('click', (e) => {
        //     console.log
        //     document.querySelectorAll('.airtable-items').forEach((item) => {
        //       if(item.dataset.origin == e.target.dataset.origin) {
        //         item.classList.remove('hidden')
        //       } else {

               }
              })
        //    }
        //  })
        //});

      //}
    //}
  //);

  origins.forEach((origin) => {
    // create a filter button for each location
    let filterBtn = document.createElement("button");
    // add a class to the button
    filterBtn.classList.add("filter-btn");
    // set the data-filter equal to the value of the current array element
    filterBtn.setAttribute("data-filter", origin);
    // render the location value of the current array element inside the html button
    filterBtn.innerHTML = origin;
    // once the button has been created
    // append it to the filters parent container
    document.querySelector(".filters").append(filterBtn);

    // lastly, we add an event listener
    // which listens for a user clicking the button we've just created
    filterBtn.addEventListener("click", (e) => {
      // clear active states on filters
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("is-active"));
      // apply active state to selected filter
      e.target.classList.add("is-active");
      // loop through all the airtable items in the document
      // assign type equal to 'location' and tag equal to the target
      filterItems("origin", e.target);
    });
  });

  // add an event listener to our 'all' filter which resets the filters
  document
    .querySelector('.filter-btn[data-filter="all"]')
    .addEventListener("click", (e) => {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("is-active"));
      // apply active state to selected filter
      e.target.classList.add("is-active");
      filterItems("origin", "all");
    });
//}
//}
//);
