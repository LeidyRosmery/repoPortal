$('.query-input').on('click', function(e) {
  $('.collapse-input').addClass('active');

});
$('.btn-search').on('click', function() {
  $('.collapse-input').removeClass('active');
  $('.block-search').addClass('activator');
  $('.sec-proyecto').addClass('no-screen');
  $('.banner-portal-main').empty();
});
$(".btn-photo").on("click", function() {
  $('.ModalImg').modal('toggle');
  $(".slider-for").flickity({
    draggable: true,
    freeScroll: true,
    wrapAround: true,
  });
});
$(".btn-pdf").on("click", function() {  
  $('.ModalPDF').modal('toggle');
});
$(".btn-video").on("click", function() {
  $('.ModalVideo').modal('toggle');
});
$(".btn-medios").on("click", function() {
  $('.ModalMedia').modal('toggle');
});
$('.ModalImg').on('shown.bs.modal', function(event) {
  $('.slider-for').flickity('resize');
});
