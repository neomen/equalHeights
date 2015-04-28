(function ($) {
  $.fn.equalHeights = function () {
    var $blocks = $(this), maxH = $blocks.eq(0).height();
    function equal() {
      $blocks.each(function () {
        maxH = ($(this).height() > maxH) ? $(this).height() : maxH;
      });
      $blocks.height(maxH);
    }
    $(window).bind('resize', function () {
      equal($blocks);
    });
  };
})(jQuery);

