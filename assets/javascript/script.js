$(document).ready(function(){
    var urlData = document.location.search;

    // initializes the form
    $('select').formSelect();

    // handle displaying the  time
    var timeDisplayE1 = $('#time-display');
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayE1.text(rightNow);
    
    var apiUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
    var artistUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=rock&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
        
    // when search is added on results html
    var searchBtn = $('#search-btn');
    var artistCard = $('#artist-card');
    var albumCard = $('#album-card');

    var userInput = $('#userInput').val();
    console.log(userInput);
    
    searchBtn.on("click", function(e) {
        e.preventDefault();
        window.location.href="./results.html";

        getData();
        localStorage();

     });                                                                    

    //     returnBtn.on("click", function(e){
    //         e.preventDefault();

    function getData(){

        console.log (userInput);
        var newURL = apiUrl.split("tag=rock").join(userInput);

        var secondUrl = artistUrl.split("tag=rock").join(userInput);  
        
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
                //console.log(response.json());
            })
            .then (function (data){
                console.log(data);
                for (var i = 0; i < data.albums.length; i++) {
                    let albumCardEl = $('<div>');
                    let albumNameEl = $("<p>");
                    let artistNameEl = $("<p>");
                    // var albumCoverEl = $();
                    // let albumRank = $();

                    albumCard.append(albumCardEl);
                    
                    // albumRank.text(data.albums.album[i].@attr.rank)

                    console.log(data.albums.album[i].name);
                    console.log(data.albums.album[i].artist.name);
                    console.log(data.albums.album[i].image[1]["#text"]);
    
                    albumNameEl.text(data.albums.album[i].name);
                    albumCardEl.append(albumNameEl);
                    
                    artistNameEl.text(data.albums.album[i].artist.name);
                    albumCardEl.append(artistNameEl);
                    
                    // in the documentation it shows a '#' before text, but this spits an error
                    // albumCoverEl.text(data.albums.album[i].image[1].#text);
                    // albumCardEl.append($('<img>', {id:'album-cover', src: data.albums.album[i].image[1].#text}));
                };
            });

                fetch(artistUrl)
                .then(function(response) {
                    return response.json();
                })
                .then (function (data){
        
                    for (var i = 0; i < data.topartists.artist.length; i++) {
                        let artistCardEl = $("<div>");
                        let artistNameEl = $("<p>");
                        // var artistImageEl = $();

                        artistCard.append(artistCardEl);
                        

                        artistNameEl.text(data.topartists.artist[i].name);
                        artistCardEl.append(artistName);
                        
                        // not sure how we want to do this part yet
                        // artistImageEl.text(data.topartists.artist[i].image[1].#text);
                        // artistCardEl.append($('<img>', {id:'artist-image', src: data.topartists.artist[i].image[1].#text}));
        
                    };
                });
    };

    function localStorage(){
        
        // local storage functions, to store search history
        var genreArr=[];
        var storage=JSON.parse(localStorage.getItem("genreName"));
        if(storage){
            storage.push(userInput);
            localStorage.setItem("genreName", JSON.stringify(storage));
        } else{
            genreArr.push(userInput);
            localStorage.setItem("genreName", JSON.stringify(genreArr));
        }
    
    // puts as list under search history
    var listGen=JSON.parse(localStorage.getItem("genreName"));
    var list=$("#searchHis");
    list.empty();
    for(var i=0; i<listGen.length; i++){
        var listItem= $('<li>');
        listItem.text(listGen[i]);
        list.append(listItem);
    };  
    }
        

    });
