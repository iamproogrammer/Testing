function visible(partial) {
    var $t = partial,
        $w = jQuery(window),
        viewTop = $w.scrollTop(),
        viewBottom = viewTop + $w.height(),
        _top = $t.offset().top,
        _bottom = _top + $t.height(),
        compareTop = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;

    return ((compareBottom <= viewBottom) && (compareTop >= viewTop) && $t.is(':visible'));

}

$(window).scroll(function(){

  if(visible($('.count-digit')))
    {
      if($('.count-digit').hasClass('counter-loaded')) return;
      $('.count-digit').addClass('counter-loaded');

$('.count-digit').each(function () {
  var $this = $(this);
  jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
    duration: 5000,
    easing: 'linear',
    step: function () {
      $this.text(Math.ceil(this.Counter));
    },
             complete: function() {
               $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
           }
  });
});
// $(function(){
//   $(".count-digit").hide(0).fadeIn(2000)
//     $('.count-digit').each(function() {
//       var $this = $(this),
//           countTo = $this.attr('#count');
//       $({ countNum: $this.text()}).animate({
//         countNum: countTo
//       },
//       {
//         duration: 5000,
//         easing:'linear',
//         step: function() {
//           $this.text(Math.floor(this.countNum));
//         },
//         complete: function() {
//           $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
//         }
//       });
//     });
// });

    }
})
