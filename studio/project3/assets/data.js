function renderItems(collection) {
    console.log("data records in JSON", collection);
    collection.forEach(function(item){
        console.log(item.uniqueID);
    });


collection.forEach(function(item) {
	const listItem = document.createElement('div') // Make the `div
	listItem.classList.add("incident");

    const uniqueID = document.createElement('h3') // Make an `h2`
    uniqueID.innerHTML = item.uniqueID // Put the JSON id inside
    listItem.appendChild(uniqueID)

    const breed = document.createElement('h4') // And another h2
    breed.innerHTML = item.breed
    listItem.appendChild(breed)

    const itemDetails =
    `
        <p><em>${item.dateofBite}</em></p>
        <p><em>Age: ${item.spayNeuter}</p>
        <p><em>${item.zipCode}</p>
    `
    listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert
    
    // if (item.breed == "UNKNOWN") { // If this is `true`
    //     listItem.classList.add('UNKNOWN') // Add this class to the whole `li`
    // }

    // if (item.albumSingle == "Single") { // If this is `true`
    //     listItem.classList.add('Single') // Add this class to the whole `li`
    // }

    // if (item.albumSingle == "EP") { // If this is `true`
    //     listItem.classList.add('EP') // Add this class to the whole `li`
    // }
    
    var collectionList = document.querySelector('.collection') 

    collectionList.appendChild(listItem)

    // if item.image collectionList
    // const listImage = document.createElement('img') 
	// listImage.appendChild(image);

    // function toggleClock() {
    //     var myClock = document.getElementById('clock');
    
    //     var displaySetting = myClock.style.display;
    
    //     var clockButton = document.getElementById('clockButton');
    
    //     if (displaySetting == 'block') {
    //       myClock.style.display = 'none';
    //       clockButton.innerHTML = 'Show clock';
    //     }
    //     else {
    //       myClock.style.display = 'block';
    //       clockButton.innerHTML = 'Hide clock';
    //     }
    //   }

    // let listImage

	// 	if(item.image == './assets/dog1.jpg'){
	// 	listImage = 'div';
	// 	} else if (item.image == 'null'){
    //     listImage = ''
    //     }


    // if(item.image) == false {
	// 	//push the items into an array
	// 	imageFalse.push (item);
	// } else if (item.image == true) {
	// 	iamgeTrue.push(item)
	// };
})
}

fetch("assets/data.json")
.then(function (data) {
    return data.json();
})
.then(function (collection) {
    renderItems(collection.reverse());
});

// every nth item display random item/description

//for every fourth item display img
// Will evaluate to true if the variable is divisible by 4
//below is the index
//variable % 4 === 0  else if divisible by 6 do something else
//inside collection.foreach(function(item))
//append to container in grid = will add to next item



//smth else
//if item.image, place image next to it,
//if item.quote, place quote next to data entry

// doc create element image
// let listimage

