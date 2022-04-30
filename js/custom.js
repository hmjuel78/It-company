$(function(){
    
    //testimonial slider
    $('.testimonial_slider').slick({
  dots: false,
  infinite: true,
        arrows: false,
  speed: 6000,
  slidesToShow: 3,
  slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
    
    
var mixer = mixitup('.gallery');
    
    
    
    
    
    
    
    
});