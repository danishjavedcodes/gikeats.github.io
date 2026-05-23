(function () {
  var logo = document.getElementById("lOGOImage");
  if (logo) {
    logo.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }

  var products = document.getElementById("products");
  if (products) {
    products.addEventListener("click", function () {
      window.location.href = "about.html";
    });
  }

  var orders = document.getElementById("orders");
  if (orders) {
    orders.addEventListener("click", function () {
      window.location.href = "index.html";
    });
  }
})();
