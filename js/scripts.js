$(document).ready(function() {
  $("form#list").submit(function(event) {
    var groceries = ["item1", "item2", "item3"];

    var mappy = groceries.map(function(grocery) {
      return $('input#' + grocery).val();
    });
    mappy.sort();
    var doubleMappy = mappy.map(function(mapster) {
      return mapster.toUpperCase();
    });
    $("#one").text(doubleMappy[0]);
    $("#two").text(doubleMappy[1]);
    $("#three").text(doubleMappy[2]);
    $(".result").show();
    event.preventDefault();
  });
});
