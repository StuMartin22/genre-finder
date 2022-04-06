
$(document).ready(function(){
var urlData = document.location.search;
var userInput = $('.userInput');

// part of initializing the jquery 
$(document).ready(function(){
    var urlData = document.location.search;
    var userInput = $('#userInput').val();
    var genreSearch; //= url split

// initializes the form

$('select').formSelect();


//var instance = M.FormSelect.getInstance(elem);


var timeDisplayE1 = $('#time-display');
// handle displaying the  time
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayE1.text(rightNow);

    
    var apiUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
    
    // initializes the form
        $('select').formSelect();
    
    // var instance = M.FormSelect.getInstance(elem);
    
    
    // when search is added on results html
    var searchBtn = $('#search-btn');
    
    searchBtn.on("click", function(e) {
        e.preventDefault();
        var newURL = apiUrl.split("tag=rock").join(userInput.val());
        console.log(newURL);
    
        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            }
            .then (function (data){
                displayGenre();
    
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
                    albumCardEl.append($('<img>', {id:'albumCover', src: data.albums.album[i].image[1].#text}));
                }
    
            })
    
        )
        })

        returnBtn.on("click", function(e){
            e.preventDefault();
        }


    // local storage function

    var genreArr=[];
    var storage=localStorage.getItem("genreName");

    if(userInput){
        storage.push(userInput);
        localStorage.setItem("genreName", userInput);
    } else{
        genreArr.push(userInput);
        localStorage.setItem("genreName", userInput);
    }

    console.log (genreArr);


    var scoreList=JSON.parse(localStorage.getItem("genreName"));

    for(var i=0; i<scoreList.length; i++){
        var listItem= $.create("li");
        var list=$("#searchHis");
        list.append(listItem);

        listItem.textContent=scoreList[i].initials + "  -  " +scoreList[i].score;
    };
});
});
