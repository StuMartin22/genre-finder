$(document).ready(function () {
    var userInput = document.location.search.split("=")[1];
    var albumCard = $('#album-card');
    var artistCard = $('#artist-card');
    console.log(userInput);

    getData(userInput)

    // handle displaying the  time
    var timeDisplayE1 = $('#time-display');
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayE1.text(rightNow);

    function getData(userInput) {

        console.log(userInput);
        //var newURL = apiUrl.split("tag=rock").join(userInput);
        var apiUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=" + userInput + "&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
        var artistUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=" + userInput + "&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";

        //var secondUrl = artistUrl.split("tag=rock").join(userInput);  

        displayAlbums(apiUrl);
        displayArtists(artistUrl);
    };

    function displayAlbums(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                console.log(data.albums.album);
                for (var i = 0; i < data.albums.album.length; i++) {
                    let albumCardEl = $("<div>");
                    let albumNameEl = $("<p>");
                    let artistNameEl = $("<p>");
                    //var albumCoverEl = $('<img');
                    // let albumRank = $();
                    albumCard.append(albumCardEl);
                    //  albumRank.text(data.albums.album[i].@attr.rank)

                     albumNameEl.text(data.albums.album[i].name);
                     albumCardEl.append(albumNameEl);

                     artistNameEl.text(data.albums.album[i].artist.name);
                     albumCardEl.append(artistNameEl);

                     //albumCardEl.append(albumCoverEl, {id:'album-cover', src: data.albums.album[i].image[1]["#text"]});
                 }
            })
    }

    function displayArtists(url) {
        fetch(url)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                for (var i = 0; i < data.topartists.artist.length; i++) {
                    let artistCardEl = $("<div>");
                    let artistNameEl = $("<p>");
                    var artistImageEl = $('<img>');

                    artistCard.append(artistCardEl);


                    artistNameEl.text(data.topartists.artist[i].name);
                    artistCardEl.append(artistNameEl);

                    // var imageCard1 = $('<img>')
                    // albumContainer.append(imageCard1)

                    // var imageNumber = data.whateverthepathwayis.here
                    // var image[i] = "https://link" + imageNumber + "rest of link"
                    //artistCardEl.append(artistImageEl, { id: 'artist-image', src: data.topartists.artist[i].image[1]["#text"] });

                }
            })
    }
    var listGen=JSON.parse(localStorage.getItem("genreName"));
        var list=$("#searchHis");
        list.empty();
        for(var i=0; i<listGen.length; i++){
            var listItem= $('<li>');
            listItem.text(listGen[i]);
            list.append(listItem);
    };  
})