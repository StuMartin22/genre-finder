var urlData = document.location.search;
var userInput = $('#userInput').val();
var genreSearch; //= url split

var apiUrl; //= url + genreSearch/genreId + albums

// when search is added on results html
var searchBtn = $('#search-btn');

searchBtn.on("click", function(event) {
    event.preventDefault();
    var newURL = apiUrl.split("tag=rock").join(userInput.val());
    console.log(newURL);
    //var artist = ;
    //var album = ;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        }
        .then (function (data){
            console.log(data);
            // displayGenre();
            
        })
    )
    })

// function displayGenre() {
    // pull from api text and images to display in html
    
