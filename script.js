var queryURL = "http://worldclockapi.com/api/json/est/now";
var months = ["","January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function loadItems(){
    for (var i = 9; i < 18; i++) {
        var text = document.getElementById(i);
        text.value = localStorage.getItem(i);
    }
}

// function checkTimes(time){
//     for (var i = 9; i < 18; i++) {
//         var text = document.getElementById(i);
//     }
// }

$(".saveBtn").on("click",function(){
    var text = document.getElementById(this.value).value;
    localStorage.setItem(this.value, text);
});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    var fullTime = response.currentDateTime;
    var day = fullTime.slice(8,10);
    var month = months[fullTime[6]];
    var dateString = response.dayOfTheWeek + ", " + month + " " + day;
    $("#currentDay").text(dateString);

    var time = fullTime.slice(11,13);
    console.log(time);
    // checkTimes(time);
});

loadItems();