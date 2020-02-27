$( document ).ready(function(){
   
    var date = moment().format("dddd, MMMM Do YYYY h:mm A");
    console.log(date);   
    $("#currentDay").append(date);

    var nine = $(".nine");
    var ten = $(".ten");
    var eleven = $(".eleven");
    var twelve = $(".twelve");
    var one = $(".one");
    var two = $(".two");
    var three = $(".three");
    var four = $(".four");
    var five = $(".five");

    var nineAM = moment("9:00", ["HH:mm"]);
    var tenAM = moment("10:00", ["HH:mm"]);
    var elevenAM = moment("11:00", ["HH:mm"]);
    var twelvePM = moment("12:00", ["HH:mm"]);
    var onePM = moment("13:00", ["HH:mm"]);
    var twoPM = moment("14:00", ["HH:mm"]);
    var threePM = moment("15:00", ["HH:mm"]);
    var fourPM = moment("16:00", ["HH:mm"]);
    var fivePM = moment("17:00", ["HH:mm"]);

    var task9 = localStorage.getItem("activity9");
    if (task9 !== null) {
        $("#activity9").val(task9);
    }
    var task10 = localStorage.getItem("activity10");
    if (task10 !== null) {
        $("#activity10").val(task10);
    }
    var task11 = localStorage.getItem("activity11");
    if (task11 !== null) {
        $("#activity11").val(task11);
    }
    var task12 = localStorage.getItem("activity12");
    if (task12 !== null) {
        $("#activity12").val(task12);
    }
    var task1 = localStorage.getItem("activity1");
    if (task1 !== null) {
        $("#activity1").val(task1);
    }
    var task2 = localStorage.getItem("activity2");
    if (task2 !== null) {
        $("#activity2").val(task2);
    }
    var task3 = localStorage.getItem("activity3");
    if (task3 !== null) {
        $("#activity3").val(task3);
    }
    var task4 = localStorage.getItem("activity4");
    if (task4 !== null) {
        $("#activity4").val(task4);
    }
    var task5 = localStorage.getItem("activity5");
    if (task5 !== null) {
        $("#activity5").val(task5);
    }

    $(".textArea").addClass("past");
    $("input").css({"background-color": "transparent"});

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