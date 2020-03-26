function loadItems(){
    for (var i = 9; i < 18; i++) {
        var text = document.getElementById(i);
        text.value = localStorage.getItem(i);
    }
}

$(".saveBtn").on("click",function(){
    var text = document.getElementById(this.value).value;
    localStorage.setItem(this.value, text);
});

loadItems();