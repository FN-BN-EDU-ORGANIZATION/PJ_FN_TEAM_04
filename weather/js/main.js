    //날씨상세
    $(function () {
        $('.fcst').hide();
        $('.weather-icon').hover(function () {
          $(this).parent().find('.fcst').slideToggle(400);
          $(this).parent().hover(function () {
          })
        });
      });
  
      //명언 제조기
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 5000,
        },
  
  
      });