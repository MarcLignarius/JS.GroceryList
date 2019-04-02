$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var groceryItem1 = $("#groceryItem1").val();
    var groceryItem2 = $("#groceryItem2").val();
    var groceryItem3 = $("#groceryItem3").val();
    var groceryItem4 = $("#groceryItem4").val();
    var groceryItem5 = $("#groceryItem5").val();
    var groceryItems = [groceryItem1, groceryItem2, groceryItem3, groceryItem4, groceryItem5];
    var list = '<ul>'
    groceryItems.forEach(function(item) {
      list += '<li>'+ item + '</li>';
    });
    list += '</ul>';
    document.getElementById("output").innerHTML = list;
    $("#initiallyshowing").hide();
    $("#initiallyhidden").show();
  });
});
