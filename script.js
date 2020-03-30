var months = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// Load saved todos
function loadItems(){
    for (var i = 9; i < 18; i++) {
        var text = document.getElementById(i);
        text.value = localStorage.getItem(i);
    }
}

// Color each timeblock appropriately
function checkTimes(time){
    for (var i = 9; i < 18; i++) {
        var section = document.getElementById(i);
        if(time > i){
            $("."+i).addClass("past");
        }
        else if(time < i){
            $("."+i).addClass("future");
        }
        else {
            $("."+i).addClass("present");
        }
    }
}

// Save todo to localStorage
$(".saveBtn").on("click",function(){
    var text = document.getElementById(this.value).value;
    localStorage.setItem(this.value, text);
});

// API request
$.ajax({
    url: "http://worldclockapi.com/api/json/est/now",
    method: "GET"
}).then(function (response) {
    var fullTime = response.currentDateTime;
    var day = fullTime.slice(8,10);
    var month = months[fullTime[6]];
    var dateString = response.dayOfTheWeek + ", " + month + " " + day;
    $("#currentDay").text(dateString);

    //get time from fullTime and subtract 1 for timezone
    var time = fullTime.slice(11,13)-1;
    checkTimes(time);
});

//loadItems on start
loadItems();
