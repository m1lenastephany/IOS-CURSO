function playVideo(source) {
    var video = document.getElementById('video');
    video.src = source;
    video.load();
    video.play();
  }
  $(document).ready(function() {
    $('.slick-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });
  });
  
  function playVideo(source) {
    var video = document.getElementById('video');
    video.src = source;
    video.load();
    video.play();
  }

 