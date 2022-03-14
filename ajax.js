$( document ).ready(function() {
    $("#button_email").click(
		function(){
			sendAjaxForm('ajax_form', 'action_ajax_form.php');
		}
	);
});
 
function sendAjaxForm(ajax_form, url) {
    jQuery.ajax({
        url:     "action_ajax_form.php", //url страницы (action_ajax_form.php)
        type:     "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        success: function(response) { 
            result = jQuery.parseJSON(response); //Данные отправлены успешно
            console.log("Email:"+ result.email);
            document.getElementById("#success_subscribe").style.display = 'block';
    	},
    	error: function(response) { // Данные не отправлены
            console.log('Ошибка. Данные не отправлены.');
    	}
 	});
}