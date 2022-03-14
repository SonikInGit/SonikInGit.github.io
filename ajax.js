$( document ).ready(function() {
    $('#button_email').click(
		function(){
		var email = $('#femail').val();
        console.log(email);	
        $.ajax({
            url:     "../action_ajax_form.php", //url страницы (action_ajax_form.php)
            type:     "POST", //метод отправки
            data: email,
            success: function(response) { 
                result = jQuery.parseJSON(response); //Данные отправлены успешно
                console.log("Email:"+ result);
                document.getElementById("#success_subscribe").style.display = 'block';
            },
            error: function(response) { // Данные не отправлены
                console.log('Ошибка. Данные не отправлены.');
            }
         });
		});
});
 
