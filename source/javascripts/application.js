$(function() {
  $('.navigation-toggle').on('click', function() {
    $('.mobile-menu').toggleClass('is-visible')
  })
  $('.down').on('click', function(event) {
    var selector = $(event.currentTarget).attr('href')
    $('body').animate({scrollTop: $(selector).offset().top}, 500)
  })
})
