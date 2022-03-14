$(document).ready(function () {
    $("#email-form").submit(function (event) {
      var formData = {
        email: $("#femail").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "action_ajax_form.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        console.log(data);
      });
      event.preventDefault();
    });
  });
