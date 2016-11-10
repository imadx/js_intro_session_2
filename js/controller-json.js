$(function(){

  console.log("Hello, there!");

  $("#controller-json-btn").on("click", function(){

    console.log($(this).attr("id"));

    $.getJSON("student.json", function(result){
        var data = result;
        console.log(data);

        $("#student-name").text(data.name);
        $("#student-age").text(data.age);
        $("#student-marks").text(data.marks);
        $("#student-favourites").text(data.favourites);

        // $.each(data.marks, function(key, value) {
        //   // HERE key -> subject name AND value -> marks
        //   $("#student-marks").append("<i>" + key + "</i>" + ": <b>" + value + "</b> " );
        // });
    });
  });

});
