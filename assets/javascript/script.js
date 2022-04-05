var urlData = document.location.search;
//var userInput = $('#userInput').val();
var genreSearch; //= url split

var apiUrl; //= url + genreSearch/genreId + albums

// handle displaying the time
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayE1.text(rightNow);
}

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
    )
    })

function displayGenre() {
    // pull from api text and images to display in html
    
}