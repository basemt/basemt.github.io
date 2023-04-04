$(document).ready(function() {alert("To fully experience the interactive aspects of this website, please view on a laptop/desktop viewport. Enjoy!"); })


// define our variables
let toggleMenu = document.querySelector(".mobile-menu");
let headerStatus = document.querySelector(".header");

// when user clicks on "menu", open and close the mobile navigation
toggleMenu.addEventListener( "click", () => {
    if (headerStatus.classList.contains("open")) {
      headerStatus.classList.remove("open");
    } else {
      headerStatus.classList.add("open");
    }
  },
  false
);

document.getElementById("img1").addEventListener("click", function(){
  document.getElementById("audio1").play();
});

document.getElementById("img2").addEventListener("click", function(){
  document.getElementById("audio2").play();
});

document.getElementById("img3").addEventListener("click", function(){
  document.getElementById("audio3").play();
});

document.getElementById("img4").addEventListener("click", function(){
  document.getElementById("audio4").play();
});

document.getElementById("img5").addEventListener("click", function(){
  document.getElementById("audio5").play();
});

document.getElementById("img6").addEventListener("click", function(){
  document.getElementById("audio6").play();
});

document.getElementById("img7").addEventListener("click", function(){
  document.getElementById("audio7").play();
});

document.getElementById("img8").addEventListener("click", function(){
  document.getElementById("audio8").play();
});

document.getElementById("img9").addEventListener("click", function(){
  document.getElementById("audio9").play();
});

document.getElementById("img10").addEventListener("click", function(){
  document.getElementById("audio10").play();
});

document.getElementById("img11").addEventListener("click", function(){
  document.getElementById("audio11").play();
});

document.getElementById("img12").addEventListener("click", function(){
  document.getElementById("audio12").play();
});

document.getElementById("img13").addEventListener("click", function(){
  document.getElementById("audio13").play();
});

document.getElementById("img14").addEventListener("click", function(){
  document.getElementById("audio14").play();
});

document.getElementById("img15").addEventListener("click", function(){
  document.getElementById("audio15").play();
});

document.getElementById("img16").addEventListener("click", function(){
  document.getElementById("audio16").play();
});

document.getElementById("img17").addEventListener("click", function(){
  document.getElementById("audio17").play();
});

document.getElementById("img18").addEventListener("click", function(){
  document.getElementById("audio18").play();
});

document.getElementById("img19").addEventListener("click", function(){
  document.getElementById("audio19").play();
});

document.getElementById("img20").addEventListener("click", function(){
  document.getElementById("audio20").play();
});

document.getElementById("img21").addEventListener("click", function(){
  document.getElementById("audio21").play();
});

document.getElementById("img22").addEventListener("click", function(){
  document.getElementById("audio22").play();
});

document.getElementById("img23").addEventListener("click", function(){
  document.getElementById("audio23").play();
});

document.getElementById("img24").addEventListener("click", function(){
  document.getElementById("audio24").play();
});

document.getElementById("img25").addEventListener("click", function(){
  document.getElementById("audio25").play();
});

document.getElementById("img26").addEventListener("click", function(){
  document.getElementById("audio26").play();
});

document.getElementById("img27").addEventListener("click", function(){
  document.getElementById("audio27").play();
});

document.getElementById("img28").addEventListener("click", function(){
  document.getElementById("audio28").play();
});

document.getElementById("img29").addEventListener("click", function(){
  document.getElementById("audio29").play();
});

document.getElementById("img30").addEventListener("click", function(){
  document.getElementById("audio30").play();
});

document.getElementById("img31").addEventListener("click", function(){
  document.getElementById("audio31").play();
});

document.getElementById("img32").addEventListener("click", function(){
  document.getElementById("audio32").play();
});

document.getElementById("img33").addEventListener("click", function(){
  document.getElementById("audio33").play();
});

document.getElementById("img34").addEventListener("click", function(){
  document.getElementById("audio34").play();
});

document.getElementById("img35").addEventListener("click", function(){
  document.getElementById("audio35").play();
});

jQuery(document).ready(function(){
  //   insert back to top button dynamicly
   $( "#backToTop" ).append('<a class="backToTop" href="javascript:void(null);" style="display: none;"><i class="fa fa-angle-up"></i><iframe id="tmp_downloadhelper_iframe" style="display: none;"></iframe></a>');
    var $window = $(window);
    var distance = 80;
      // scroll
    $window.scroll(function() {
      // header
      if($window.scrollTop() >= distance) {
        $(".backToTop").fadeIn();
      }else{
        $(".backToTop").fadeOut();
      }
    });
    
    $('.backToTop').click(function() {
      $('html, body').animate({
              scrollTop: 0
          }, 800);
   });
  })