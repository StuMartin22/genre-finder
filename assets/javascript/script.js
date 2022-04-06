$(document).ready(function(){
    var urlData = document.location.search;
    var urlData = document.location.search;
    var genreSearch; //= url split

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
    
    searchBtn.on("click", function(e) {
        e.preventDefault();
        console.log("yes");
        var userInput = $('#userInput').val();
        console.log (userInput);

        var newURL = apiUrl.split("tag=rock").join(userInput);
        console.log(newURL);

        var secondUrl = artistUrl.split("tag=rock").join(userInput);  
        
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then (function (data){
    
                for (var i = 0; i < data.albums; i++) {
                    var albumCardEl = $();
                    var albumNameEl = $();
                    var artistNameEl = $();
                    // var albumCoverEl = $();
    
    
                    albumNameEl.text(data.albums.album[i].name);
                    albumCardEl.append(albumNameEl);
    
                    artistNameEl.text(data.albums.album[i].artist.name);
                    albumCardEl.append(artistNameEl);
    
                    // in the documentation it shows a '#' before text, but this spits an error
                    // albumCoverEl.text(data.albums.album[i].image[1].#text);
                    // albumCardEl.append($('<img>', {id:'albumCover', src: data.albums.album[i].image[1].#text}));
                };
    
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
        console.log (listGen)
        for(var i=0; i<listGen.length; i++){
            var listItem= $('<li>');
            var list=$("#searchHis");
            list.append(listItem);
            listItem.text(listGen[i]);
        };  
     });

        
     });                                                                    

    //     returnBtn.on("click", function(e){
    //         e.preventDefault();
    // });

});
