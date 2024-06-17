//from https://divicio.us/effects/position-aware-hover-effect-for-divi-button/
(function($) {
    /* Position aware hover effect */
    var ofs, x, y;
    $(document).on("mouseenter", ".btn.position_aware_effect", function(e) {
      ofs = $(this).offset();
      x = e.pageX - ofs.left;
      y = e.pageY - ofs.top;
      var name = $(this)
      .text()
      .toLowerCase()
      .split(" ")[0];
  
      $(this).append(
        '<div class="blob ' +
        name +
        '" style="left:' +
        x +
        "px; top: " +
        y +
        'px;"></div>'
      );
  
      var blob = $(this).find(".blob");
      setTimeout(function() {
        blob.addClass("expand");
      }, 20);
    });
    $(document).on("mouseleave", ".btn.position_aware_effect", function(e) {
      ofs = $(this).offset();
      x = e.pageX - ofs.left;
      y = e.pageY - ofs.top;
      var blob = $(this).find(".blob");
      blob.css({ left: x, top: y });
      blob.removeClass("expand");
      setTimeout(function() {
        blob.remove();
      }, 800);
    });
  })(jQuery);
  