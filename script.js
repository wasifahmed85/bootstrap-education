$('.course_slider_wrap').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            infinite: true,
            arrows: false,
         }
        },   
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
         }
        },  
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
         }
        },   
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
         }
        },     
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
         }
        },   
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
         }
        }   
      ]
});
//------------------------------------- client section js----------------------------------------
$('.main_r').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
       }
      },
    ]
  });

