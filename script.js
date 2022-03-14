window.addEventListener('resize', function(event) {
if(window.innerWidth <= 768 || window.innerWidth < 1920){
    $(document).ready(function(){
          $("#days").text("DD");
          $("#hours").text("HH");
          $("#minutes").text("MM");
          $("#seconds").text("SS");
          $(".label .back").attr("src","../test task/src/img/red_back2.svg");
        });
}     
else if(window.innerWidth >= 1920){
    $(document).ready(function(){
        $("#days").text("Days");
        $("#hours").text("Hours");
        $("#minutes").text("Minutes");
        $("#seconds").text("Seconds");
        $(".label .back").attr("src","../test task/src/img/red_back.svg");
      });
}
}, true); 

let expireDate = new Date("Dec 31, 2022 12:00:00").getTime();
document.addEventListener('DOMContentLoaded', function() {
var timer = setInterval(function() {
    let now = new Date().getTime(); 
    let difference = expireDate - now;

    if (difference >= 0) {
        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let mins = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let secs = Math.floor((difference % (1000 * 60)) / 1000);

       document.querySelector(".timer_days").innerHTML = days; 
       document.querySelector(".timer_hours").innerHTML = ("0" + hours).slice(-2);  
       document.querySelector(".timer_minutes").innerHTML = ("0" + mins).slice(-2); 
       document.querySelector(".timer_seconds").innerHTML = ("0" + secs).slice(-2); 
    }
}, 1000);
});
function reply_click(clicked_id)
{
        let email = document.getElementById("femail").value;
        if(validateEmail(email) == true){
            scrollHiddenByModal();
        }
        else{
            console.log("Error!");      
        }
}

function scrollHiddenByModal() {
        document.getElementsByTagName("body")[0].style.overflow = 'hidden';
}
function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }