$(function() {
  $('.cart-button').click(function() {
    $('.cart-icon').css({ visibility: 'visible' });
    let currentQuantity = $('.cart-icon').text();
    let newQuantity = parseInt(currentQuantity) + 1;
    $('.cart-icon').html(newQuantity);
  });
});
