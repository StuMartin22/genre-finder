var urlData = document.location.search;
var userInput = $('#textarea1').val();
var genreSearch; //= url split

var apiUrl; //= url + genreSearch/genreId + albums

// when search is added on results html
var searchBtn = $('#search-btn');

searchBtn.on("click", function(e) {
    e.preventDefault();
    //var artist = ;
    //var album = ;

    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        }
        .then (function (data){
            displayGenre();
            
        })
    })

function displayGenre() {
    // pull from api text and images to display in html
    
}