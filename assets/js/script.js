$( document ).ready(function(){
   
    var date = moment().format("dddd, MMMM Do YYYY h:mm");
    console.log(date);   
    $("#currentDay").append(date);

    // var nine = $("div").addClass("#9AM");
    // var ten = $("div").addClass("#10AM");
  
    // var arr = ["nine", "ten"];

    // for (var i= 0; i < arr.length; i++) {

    //     if ([i] === moment().format)
        
    //}


    $("#9AM").addClass("#present");



   

})