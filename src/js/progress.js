(function ($) {
    $(function () {
  
  
      $(window).on('scroll', function () {
        fnOnScroll();
      });
  
      $(window).on('resize', function () {
        fnOnResize();
      });
  
  
      var agTimeline = $('.js-timeline'),
        agTimelineLine = $('.js-timeline_line'),
        agTimelineLineProgress = $('.js-timeline_line-progress'),
        agTimelinePoint = $('.js-timeline-card_point-box'),
        agTimelineItem = $('.js-timeline_item'),
        agProgressTitle = $('.progress__title-first'),
        agProgressTitleSecond = $('.progress__title-second'),
        agProgressTitleThird = $('.progress__title-third'),
        agProgressTitleFourth = $('.progress__title-fourth'),
        agOuterHeight = $(window).outerHeight(),
        agHeight = $(window).height(),
        f = -1,
        agFlag = false;
  
      function fnOnScroll() {
        agPosY = $(window).scrollTop();
  
        fnUpdateFrame();
      }
  
      function fnOnResize() {
        agPosY = $(window).scrollTop();
        agHeight = $(window).height();
  
        fnUpdateFrame();
      }
  
      function fnUpdateWindow() {
        agFlag = false;
  
        agTimelineLine.css({
          top: agTimelineItem.first().find(agTimelinePoint).offset().top - agTimelineItem.first().offset().top,
          bottom: agTimeline.offset().top + agTimeline.outerHeight() - agTimelineItem.last().find(agTimelinePoint).offset().top
        });
  
        f !== agPosY && (f = agPosY, agHeight, fnUpdateProgress());
      }
  
      function fnUpdateProgress() {
        var agTop = agTimelineItem.last().find(agTimelinePoint).offset().top;
  
        i = agTop + agPosY - $(window).scrollTop();
        a = agTimelineLineProgress.offset().top + agPosY - $(window).scrollTop();
        n = agPosY - a + agOuterHeight / 2;
        i <= agPosY + agOuterHeight / 2 && (n = i - a);
        agTimelineLineProgress.css({height: n + "px"});
  
        agProgressTitle.each(function () {
            var agTop = $(this).offset().top;
          
            (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('active-text-decoration') : $(this).removeClass('active-text-decoration');
          })

          agProgressTitleSecond.each(function () {
            var agTop = $(this).offset().top;
          
            (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('active-text-decoration-second') : $(this).removeClass('active-text-decoration-second');
          })

          agProgressTitleThird.each(function () {
            var agTop = $(this).offset().top;
          
            (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('active-text-decoration-third') : $(this).removeClass('active-text-decoration-third');
          })

          agProgressTitleFourth.each(function () {
            var agTop = $(this).offset().top;
          
            (agTop + agPosY - $(window).scrollTop()) < agPosY + .5 * agOuterHeight ? $(this).addClass('active-text-decoration-fourth') : $(this).removeClass('active-text-decoration-fourth');
          })
      }
  
      function fnUpdateFrame() {
        agFlag || requestAnimationFrame(fnUpdateWindow);
        agFlag = true;
      }
  
  
    });
  })(jQuery);

//   // Получаем все элементы с классом "your-class"
// var elements = document.getElementsByClassName('active-text-decoration');

// // Проверяем, что есть как минимум два элемента с этим классом
// if (elements.length >= 2) {
//   // Выбираем второй элемент (индекс 1)
//   var secondElement = elements[1];

//   // Устанавливаем ширину псевдоэлемента второго элемента
//   var pseudoElement = window.getComputedStyle(secondElement, '::after');
//   pseudoElement.setProperty('width', '500px');
// }
  