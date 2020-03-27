$(".fact-menu").click(function(e) {
  let fact = $(this).data("fact");
  let data = e.target.dataset.fact;

  if (fact == data) {
    if (fact == 1) {
      window.location = "1-fact.html";
    } else if (fact == 2) {
      window.location = "2-fact.html";
    } else if (fact == 3) {
      window.location = "3-fact.html";
    }
  }
});
