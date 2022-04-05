$(document).ready(function(){
var urlData = document.location.search;
var userInput = $('.userInput');

// var genreSearch; //= url split

// var apiUrl; //= url + genreSearch/genreId + albums

var apiUrl = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rock&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json"

// initializes the form
    $('select').formSelect();

// var instance = M.FormSelect.getInstance(elem);


// when search is added on results html
var searchBtn = $('#search-btn');



searchBtn.on("click", function(event) {
    console.log(userInput.val());
    event.preventDefault(event);
    var newURL = "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=" + userInput.val() + "&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
    // console.log(newURL);
});
});



    //var artist = ;
    //var album = ;

    // fetch(apiUrl)
    //     .then(function(response) {
    //         return response.json();
    //     }
    //     .then (function (data){
    //         displayGenre();
            
    //     })
    // )
    // })

// function displayGenre() {
    // pull from api text and images to display in html
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
// fetch(newURL)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         console.log(data.results)
//     });
// localStorage.setItem("cityName", searchTerm.val());
// // localStorage.getItem(searchTerm.val()); this also pulls it
// // console.log(localStorage.getItem("cityName"));
// var cityName = localStorage.getItem("cityName");
// console.log(cityName);
// var historyContainer = $(".historyContainer");
// var searchHistory = $('<button>');
// searchHistory.text(cityName);
// historyContainer.append(searchHistory);
