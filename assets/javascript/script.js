var urlData = document.location.search;
// var userInput = $('#userInput').val();
var genreSearch; //= url split
var returnBtn = $('#return-btn');

var apiUrl; //= url + genreSearch/genreId + albums

// initializes the form
// $(document).ready(function(){
//     $('select').formSelect();
// });

var instance = M.FormSelect.getInstance(elem);


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

returnBtn.on("click", function(e){
    e.preventDefault();
    
    
})

function displayGenre() {
    // pull from api text and images to display in html
    
}


// local storage and search history function
// var userInputArr=[];
// var searchHis=localStorage.setItem(userInput)

// if(userInput){
//     userCity.push(userInputArr);
//     localStorage.setItem("cities", JSON.stringify(userCity));
// } 
// else{
//     userInputArr.push(userCity);
//     localStorage.setItem("cities", JSON.stringify(userInputArr));
// }

// console.log(userInputArr);
