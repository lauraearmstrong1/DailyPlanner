$( document ).ready(function(){
   
    var date = moment().format("dddd, MMMM Do YYYY h:mm");
    console.log(date);   
    $("#currentDay").append(date);

    var nine = document.getElementsByClassName("nine");
    var ten = document.getElementsByClassName("ten");
    var eleven = document.getElementsByClassName("eleven");
    var twelve = document.getElementsByClassName("twelve");
    var one = document.getElementsByClassName("one");
    var two = document.getElementsByClassName("two");
    var three = document.getElementsByClassName("three");
    var four = document.getElementsByClassName("four");
    var five = document.getElementsByClassName("five");

    var timeSlot = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
    var arr = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];
    var now  = moment().format("HH");
    var nineAM = "09"
    
    console.log(now);
    
    for (var i= 0; i < arr.length; i++) {
        console.log(arr[i])
        if (arr[i] < now) {
            for (var j=0; j < timeSlot.length; j++) {
                $(timeSlot[j]).css({"background-color": "#d3d3d3"})
            }
            
        }
    }
   

})