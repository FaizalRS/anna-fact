$(".fact-menu").click(function(e) {
  let fact = $(this).data("fact");
  let data = e.target.dataset.fact;

  if (fact == data) {
    window.location = "main-fact.html";
    if (fact == 1) {
      $(".title-fact").html("<h3>Fact 1</h3>");
    }
  }
});
