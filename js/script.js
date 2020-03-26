$(document).ready(function() {
  $(".fact-menu").click(function(e) {
    let fact = $(this).data("fact");
    let data = e.target.dataset.fact;

    if (fact == data) {
      if (fact == 1) {
        window.location = "main-fact.html";
        $("#main-fact-tiitle").html("solved!");
      }
    }
  });

  $(window).bind("beforeunload", function() {
    confirm("yakin?");
  });
  $("#title-fact").click(function() {
    $(this).html("ok");
  });
});
