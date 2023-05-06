//i published to github but the json on longer works//

function renderItems(collection) {

    const collectionList = document.querySelector('.collection') 

    console.log("data records in JSON", collection);
    collection.forEach(function(item){
        console.log(item.title);
    });

	collection.forEach(function(item) {
	const listItem = document.createElement('div')
	listItem.classList.add("song");

    const songTitle = document.createElement('h3') 
    songTitle.innerHTML = item.title 
    listItem.appendChild(songTitle)

    const source = document.createElement('h4')
    source.innerHTML = item.artist
    listItem.appendChild(source)

    const itemDetails =
    `
        <img src="${item.image}"/>
        <p><em>Released As: ${item.albumSingle}</p>
        <p><em>Genre: ${item.genre}</p>
        <p><em>Year Released: ${item.releaseYear}</p>
    `
    listItem.insertAdjacentHTML('beforeend', itemDetails) 
    
    if (item.albumSingle == "Album") { 
        listItem.classList.add('Album') 
    } else if (item.albumSingle == "Single") { 
        listItem.classList.add('Single') 
    } else if (item.albumSingle == "EP") {
        listItem.classList.add('EP') 
    }
    
    collectionList.appendChild(listItem)
})

}

fetch('assets/summerplaylist.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (collection) {
        renderItems(collection.reverse());
    });