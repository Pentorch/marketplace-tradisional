$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
  // Set Current Years
  var d = new Date();
  var n = d.getFullYear();
  document.getElementById("current_year").innerHTML = n;
});
