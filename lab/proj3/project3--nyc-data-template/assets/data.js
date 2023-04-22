// Function to render your items
function renderItems(collection) {
	// The `ul` where the items will be inserted
	const collectionList = document.getElementById('collection');

	let runningTrue = []
	let runningFalse = []

	//BRUH CURLY BRACKETS MEANS TRUE LMAOOO
	//forEach is to expose each element and do something with it from the array
	//if item.running is default reading as true
collection.forEach(function(item) {
	if(item.running) == false {
		//push the items into an array
		runningFalse.push (item);
	} else if (item.running == true) {
		runningTrue.push(item)
	}
});

const dotContainer = document.createElement('div')
dotContainer.classList.add('dot-container')
collectionList.appendChild(dotContainer)

//activeDot represents all the squirrels in the runningTrue category
const activeDot = document.createElement('div');
activeDot.style.background = '#000';

//this is CSS inside of JS
	//collection.length tells you how many items are in your collection
	//runningTrue.length tells you how many of the squirrels ran
	//hhhowever, you have to put it inside a stringliteral for it to work
	//so runningTrue/length = how many of the squirrels ran out of the total squirrels
activeDot.style.width = `${runningTrue.length / collection.length * 100}vw`;
activeDot.style.height = '100vh';

const activeTitle = `
		<h2 style="position: absolute;left: 0;top: 0;">Active Squirrels: ${runningTrue.length / collection.length * 100}%</h2>
	`

//shift+option+down arrow to duplicate section
const lazyDot = document.createElement("div");
lazyDot.style.background = '#ff0000';
lazyDot.style.width = `${runningFalse.length / collection.length * 100}vw`;
lazyDot.style.height = '100vh';

collectionList.appendChild(activeDot)
collectionList.appendChild(lazyDot)


	// Loop through each item in the collection array
	collection.forEach(function(item) {
		const listItem = document.createElement('div') // Make the `div
		listItem.classList.add("squirrel");
		
	//BELOW IS AN EXAMPLE

		//let leftPosition

		// if(item.month == 'october'){
		// 	leftPosition = '85%';
		// }

		// const itemDetails =
		// `
		// 	<div class="date-container">
		// 		<div class="data-point" style="left: ${item.leftPosition};background: ${item.primary_fur_color} == 'grey' ? '#fefefe' "></div>
		// 		<div class="date-details">
		// 			<h2>${item.unique_squirrel_id}</h2>
		// 			<h2>${item.primary_fur_color}</h2>
		// 			<p><em>Full color: ${item.primary_fur_color} and ${item.highlight_fur_color}</em></p>
		// 			<p><em>Spotted: ${item.location}</em></p>
		// 			<p><em>Age: ${item.age}</em></p>
		// 		</div>
		// 	</div>
		// `


		// You can make each element inside of that...
		const itemTitle = document.createElement('h2') // Make an `h2`
		itemTitle.innerHTML = item.unique_squirrel_id // Put the JSON squirrel id inside
		listItem.appendChild(itemTitle) // And add it to the `div`!

		const itemFur = document.createElement('h2') // And another h2
		itemFur.innerHTML = item.primary_fur_color // Put the fur color in the html
		listItem.appendChild(itemFur) // And add that too

		// This can get annoying, so we can use “template literals” instead
		const itemDetails =
		//the dollar sign is a "find" tool
		//these are just variables, so you're writing html but it doesn't mean anything 
		//until you put it in the dom
			`
				<p><em>Full color: ${item.primary_fur_color} and ${item.highlight_fur_color} </em></p>
				<p><em>Spotted: ${item.location}</p>
				<p><em>Age: ${item.age}</p>
			`

		//this is a method for inserting, and then you specify where you want it to insert
		listItem.insertAdjacentHTML('beforeend', itemDetails) // Which can we then insert

		// You can build logic from your data, too
		if (!item.indifferent) { // If this is `false`
			listItem.classList.add('indifferent') // Add this class to the whole `li`
		}

		if (item.primary_fur_color == "Gray") { // If this is `true`
			listItem.classList.add('gray') // Add this class to the whole `li`
		}

		if (item.primary_fur_color == "Cinnamon") { // If this is `true`
			listItem.classList.add('cinnamon') // Add this class to the whole `li`
		}

		if (item.primary_fur_color == "Black") { // If this is `true`
			listItem.classList.add('black') // Add this class to the whole `li`
		}


		const friendlyDetails = document.createElement('p');
		listItem.appendChild(friendlyDetails);

		if (item.runs_from == true) { // If this is `true`
			friendlyDetails.innerHTML = "Friendly squirrel";
    } else {
			friendlyDetails.innerHTML = "This squirrel ran away :(";
		}

		const noisyDetails = document.createElement('p');
		listItem.appendChild(noisyDetails);

		if (item.moans == true) { // If this is `true`
			noisyDetails.innerHTML = "Noisy squirrel";
    } else {
		noisyDetails.innerHTML = "Quiet squirrel";
		}



		collectionList.appendChild(listItem) // Then add the whole `li` into the `ul`
	})
}



// Fetch gets your JSON file.
fetch('assets/data.json')
//.then is asking for [this] to happen after fetch
//this is asynchronous code
	.then(function(response) {
		return response.json();	
	})
	.then(function(collection){
		// And passes the data to the function, above!
		renderItems(collection.reverse()) // In reverse order
	})
