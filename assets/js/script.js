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

    var nineAM = moment("9:00", ["HH:mm"]);
    var tenAM = moment("10:00", ["HH:mm"]);
    var elevenAM = moment("11:00", ["HH:mm"]);
    var twelvePM = moment("12:00", ["HH:mm"]);
    var onePM = moment("13:00", ["HH:mm"]);
    var twoPM = moment("14:00", ["HH:mm"]);
    var threePM = moment("15:00", ["HH:mm"]);
    var fourPM = moment("16:00", ["HH:mm"]);
    var fivePM = moment("17:00", ["HH:mm"]);

   

    $(".textArea").addClass("past");
    $("input").css({"background-color": "transparent"});

    window.onload = function() {
        var task9 = localStorage.getItem("activity9");
        if (task9 !== null) {
            $("#activity9").val("activity9");
            //$("#textArea").append(task9).val();
        }
        $("input").append("task9");
     }

    $(".saveBtn").on("click", function(event) {
        event.preventDefault();
        localStorage.setItem("activity9", $("#activity9").val());
        localStorage.setItem("activity10", $("#activity10").val());
        localStorage.setItem("activity11", $("#activity11").val());
        localStorage.setItem("activity12", $("#activity12").val());
        localStorage.setItem("activity1", $("#activity1").val());
        localStorage.setItem("activity2", $("#activity2").val());
        localStorage.setItem("activity3", $("#activity3").val());
        localStorage.setItem("activity4", $("#activity4").val());
        localStorage.setItem("activity5", $("#activity5").val());
    });
    
    var now  = moment();
    var sixPM = moment("18:00", ["HH:mm"]);
    console.log(now);

    //9:00
    if(nineAM.isAfter(now)) {
        $(nine).addClass("future");
        $("input").addClass("future");
    }
    if(now.isAfter(nineAM) && now.isBefore(tenAM) || nineAM === now) {
        $(nine).addClass("present");
    }

    //10:00
    if(tenAM.isAfter(now)) {
        $(ten).addClass("future");
    }
    if(now.isAfter(tenAM) && now.isBefore(elevenAM) || tenAM === now) {
        $(ten).addClass("present");
    }

    //11:00
    if(elevenAM.isAfter(now)) {
        $(eleven).addClass("future");
    }
    if(now.isAfter(elevenAM) && now.isBefore(twelvePM) || elevenAM === now) {
        $(eleven).addClass("present");
    }

    //12:00
    if(twelvePM.isAfter(now)) {
        $(twelve).addClass("future");
    }
    if(now.isAfter(twelvePM) && now.isBefore(onePM) || twelvePM === now) {
        $(twelve).addClass("present");
    }

    //1:00
    if(onePM.isAfter(now)) {
        $(one).addClass("future");
    }
    if(now.isAfter(onePM) && now.isBefore(twoPM) || onePM === now) {
        $(one).addClass("present");
    }

    //2:00
    if(twoPM.isAfter(now)) {
        $(two).addClass("future");
    }
    if(now.isAfter(twoPM) && now.isBefore(threePM) || twoPM === now) {
        $(two).addClass("present");
    }

    //3:00
    if(threePM.isAfter(now)) {
        $(three).addClass("future");
    }
    if(now.isAfter(threePM) && now.isBefore(fourPM) || threePM === now) {
        $(three).addClass("present");
    }

    //4:00
    if(fourPM.isAfter(now)) {
        $(four).addClass("future");
    }
    if(now.isAfter(fourPM) && now.isBefore(fivePM) || fourPM === now) {
        $(four).addClass("present");
    }

    //5:00
    if(fivePM.isAfter(now)) {
        $(five).addClass("future");
    }
    if(now.isAfter(fivePM) && now.isBefore(sixPM) || fivePM === now) {
        $(five).addClass("present");
    }




})