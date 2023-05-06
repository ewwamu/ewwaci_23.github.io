function setup() {
  let cvn = createCanvas(windowWidth, windowHeight);
  cvn.position(0, 0);
  background(123);
}

// Function to render your items
function renderItems(collection) {
  // out put stuff to html page and make data look NICE 
  console.log("data records in your JSON:", collection); 
  // will log something like this: [Record 1 {}, Record 2{}, Record 3{}];
  collection.forEach(
    function getItemProperty(item){
      //noStroke();
      fill(255);
      console.log(typeof item.image);
      
      //if(typeof item.zipCodes === "number"){
      //w = 5;
      //}
      
      // you can get specific properties from each of your record, "Borough" is a property found in my JSON
      console.log(item.image);
      // console.log(item.StartDateTime);
      if (item.image === "assets/imgs/dog1.jpg"){
        fill("#FCE92F");
        if(typeof item.image === "assets/imgs/dog1.jpg"){
        w = 1200;        
        rect(random(0, windowWidth), random(0, windowHeight), w, w);
      } 
        else {
        rect(random(0, windowWidth), random(0, windowHeight), 25, 25);
      }
      }
      else if (item.image === ""){
        fill("#BE2FFC");
        circle(random(0, windowWidth), random(0, windowHeight), 25);
      }
    //   else if (item.Borough === "Brooklyn"){
    //     fill("#BE2FFC");
    //     rect(random(0, windowWidth), random(0, windowHeight), 25, 25);
    //   }
    //   else if (item.Borough === "Bronx"){
    //     fill("#FCE92F");
    //     rect(random(0, windowWidth), random(0, windowHeight), 25, 25);
    //   }
    //   else {
    //     fill("#2F92FC");
    //     rect(random(0, windowWidth), random(0, windowHeight), 25, 25);
    //   }
    //} 
});

}

// Fetch gets your JSON file.
fetch("assets/data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (collection) {
    // And passes the data to the function, above!
    renderItems(collection.reverse());
  });