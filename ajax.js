$(document).ready(function () {
    $("email-form").submit(function (event) {
      $.ajax({
        type: "POST",
        url: "action_ajax_form.php",
        dataType: "html",
        success: function(response) { //Данные отправлены успешно
          result = $.parseJSON(response);
          console.log("Email: " + result.email);
      },
      error: function(response) { // Данные не отправлены
        console.log("Ошибка. Данные не отправлены.");
      }
    });
  });
});
