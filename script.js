$(function(){
if (window.matchMedia("(max-width: 500px)").matches) {
  $(".header-menu").hide();

  $(".navButton").click( function(){
    $(".header-menu").slideToggle();
  });
}
});
