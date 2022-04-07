$(document).ready(function () {
    var urlData = document.location.search;

    // initializes the form
    $('select').formSelect();

    // handle displaying the  time
    var timeDisplayE1 = $('#time-display');
    var rightNow = moment().format('MMMM Do YYYY, h:mm:ss a');
    timeDisplayE1.text(rightNow);


    // when search is added on results html
    var searchBtn = $('#search-btn');


    searchBtn.on("click", function (e) {
        e.preventDefault();

        var userInput = $('#userInput').val();
        console.log(userInput);
        //getData(userInput);
        getLocalStorage(userInput);
        window.location.href = "./results.html?userInput="+userInput;

    });

    function getLocalStorage(userInput) {

        // local storage functions, to store search history
        var storage = JSON.parse(localStorage.getItem("genreName")) || [];
      
        storage.push(userInput);
        localStorage.setItem("genreName", JSON.stringify(storage));
         
    }

    //puts as list under search history
    var listGen=JSON.parse(localStorage.getItem("genreName"));
    var list=$("#searchHis");
    list.empty();
    for(var i=0; i<listGen.length; i++){
        var listItem= $('<li>');
        listItem.text(listGen[i]);
         list.append(listItem);
    };

})
