(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])