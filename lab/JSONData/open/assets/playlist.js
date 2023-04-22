function renderItems(collection) {
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
    }

    if (item.albumSingle == "Single") { 
        listItem.classList.add('Single') 
    }

    if (item.albumSingle == "EP") {
        listItem.classList.add('EP') 
    }
    
    var collectionList = document.querySelector('.collection') 

    collectionList.appendChild(listItem)
})

}

// $("#testText").hover(
//     function(e){
//         $("#tooltip").show();
//     },
//     function(e){
//         $("#tooltip").hide();
//    });​​​​​​​​​​

// document.addEventListener('mousemove', (e) => {
//     document.querySelector('cursor').style.left = `${clientX}`
//     document.querySelector('cursor').style.top = `${clientY}`

//     console.log('e', e.clientX);
// })


fetch('../../lab/JSONData/open/assets/playlist.json')
.then(function (response) {
    return response.json();
})
.then(function (collection) {
    renderItems(collection.reverse());
});
