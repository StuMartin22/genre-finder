$(document).ready(function(){
    var urlData = document.location.search;
    // var userInput = $('#userInput').val();
    var genreSearch; //= url split
    
    var apiUrl = "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=" + genreSearch + "&limit=10&api_key=38f325c730f4218c2247c79ff7fd0a85&format=json";
    
    // initializes the form
        $('select').formSelect();
    
    // var instance = M.FormSelect.getInstance(elem);
    
    
    // when search is added on results html
    var searchBtn = $('#search-btn');
    
    searchBtn.on("click", function(e) {
        e.preventDefault();
    
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
                    albumCardEl.append($('<img>', {id:'albumCover', src: data.albums.album[i].image[1].#text}
                ));
                }
    
            })
    
        )
        })

        returnBtn.on("click", function(e){
            e.preventDefault();
            
            // Do we want to use this instead of having it in the HTML?
            //document.location.href = "./index.html";
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
    
    });