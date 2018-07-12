$(function () {
    $(".cart-button").click(function () {
        $(".cart-icon").css({"visibility": "visible"});
        var currentQuantity = $(".cart-icon").text();
        var newQuantity = parseInt(currentQuantity) + 1;
        $(".cart-icon").html(newQuantity);
    });
});