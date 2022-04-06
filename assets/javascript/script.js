// part of initializing the jquery 
$(document).ready(function(){

    var urlData = document.location.search;
    var userInput = $('#userInput').val();
    var genreSearch; //= url split

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


    var listGen=JSON.parse(localStorage.getItem("genreName"));

    for(var i=0; i<listGen.length; i++){
        var listItem= $.create("li");
        var list=$("#searchHis");
        list.append(listItem);

        listItem.textContent=listGen[i];
    };



});
