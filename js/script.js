$(".fact-menu").click(function(e) {
  let fact = $(this).data("fact");
  let data = e.target.dataset.fact;

  if (fact == data) {
    window.location = "main-fact.html";
    alert(fact);
  }
});
