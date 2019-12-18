$(function() {
  $('.navigation-toggle').on('click', function() {
    $('.mobile-menu').toggleClass('is-visible')
  })
  $('.down').on('click', function(event) {
    event.preventDefault()
    var selector = $(event.currentTarget).attr('href')
    $('html, body').animate({scrollTop: $('#main').offset().top}, 500)
  })
})
