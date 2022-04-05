
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


// when search is added on results html
//var searchBtn = $('#search-btn');



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
});

    var apiUrl; //= url + genreSearch/genreId + albums

    // initializes the form
    $('select').formSelect();


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

    function displayGenre() {
        // pull from api text and images to display in html
        
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

