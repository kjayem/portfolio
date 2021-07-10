const parallax = document.getElementById("parallaxOne");

window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    // console.log('Offset: ' + offset);
    // console.log('offset * 0.7' + offset * 0.7);
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})

//nav toggle
document.getElementById("navigate-toggle").addEventListener("click", toggleFunction);

function toggleFunction() {
    var x = document.getElementById("nav-container");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Scroll Indicator
$(document).ready(function(){
        
  $(window).on('scroll',function() {

      var link = $('.navbar a.dot');
      var top = $(window).scrollTop();

      $('.sec').each(function() {
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if(top >= offset && top < offset + height) {
          link.removeClass('active');
          $('.navbar').find('[data-scroll="' + id + '"]').addClass('active');
      }
      });
  });
  });

  //smooth scroll


  
