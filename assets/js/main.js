(function () {
  var collapseItems = document.querySelectorAll(".collapse");

  for (var i = 0; i < collapseItems.length; i++) {
    collapseItems[i].addEventListener("click", function(event) {
      this.classList.toggle("collapse--open");
    })
  }
}());
