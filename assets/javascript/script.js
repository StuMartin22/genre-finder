$(document).ready(function(){
var urlData = document.location.search;
// var userInput = $('#userInput').val();
var genreSearch; //= url split

var apiUrl; //= url + genreSearch/genreId + albums


// initializes the form

     $('select').formSelect();


//var instance = M.FormSelect.getInstance(elem);


var timeDisplayE1 = $('#time-display');
// handle displaying the  time
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayE1.text(rightNow);


// when search is added on results html
//var searchBtn = $('#search-btn');

 //searchBtn.on("click", function(e) {
    //e.preventDefault();
    //var artist = ;
    //var album = ;

   // fetch(apiUrl)
       // .then(function(response) {
          //  return response.json();
      //  }
       // .then (function (data){
         //   displayGenre();
            
      //  })
   // )
  //  })

//function displayGenre() {
    // pull from api text and images to display in html



 // local storage and search history function



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