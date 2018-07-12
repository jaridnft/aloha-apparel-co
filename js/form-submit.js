$("form").submit(function () {
    var email = $("form input[type='email']").val();
    if (email === "") {
      alert("Please submit a valid email address.");
    }
    else {
      alert("Thanks for subscribing!");
    }
});