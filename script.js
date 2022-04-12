$(document).ready(function(){

    var current_fs, next_fs, previous_fs; //fieldsets
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    
    setProgressBar(current);
    
    $(".next").click(function(){
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //Add Class Active
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    next_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(++current);
    });
    
    $(".previous").click(function(){
    
    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();
    
    //Remove class active
    $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
    
    //show the previous fieldset
    previous_fs.show();
    
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
    step: function(now) {
    // for making fielset appear animation
    opacity = 1 - now;
    
    current_fs.css({
    'display': 'none',
    'position': 'relative'
    });
    previous_fs.css({'opacity': opacity});
    },
    duration: 500
    });
    setProgressBar(--current);
    });
    
    function setProgressBar(curStep){
    var percent = parseFloat(100 / steps) * curStep;
    percent = percent.toFixed();
    $(".progress-bar")
    .css("width",percent+"%")
    }
    
    $(".submit").click(function(){
    return false;
    })
    
    });

function setusertype() {
    f= document.form1;
    if(f.businessorprivatechoice[0].checked == true) {
        f.businessorprivate.value="one need one site";
        f.renewalreferer.value="one need one site";
    }
    if(f.businessorprivatechoice[1].checked == true) {
        f.businessorprivate.value="multiple needs multiple sites";
        f.renewalreferer.value="multiple needs multiple sites";
    }
}

function setcompany() {
    f= document.form1;
    if(f.businessorprivatechoice[0].checked == true) {
        f.company.value="Private Party";
    }
}

function setEmailcookie() {
	f = document.form1;
	var expDays = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + (expDays*24*60*60*1000));
	setCookie("paymentcode", f.paycode.value, exp, "/");
	setCookie("paymentterm", f.pay_term.value, exp, "/");
	setCookie("fameml", f.email.value, exp, "/");
	setCookie("businessorprivate", f.businessorprivate.value, exp, "/");
	setCookie("company", f.company.value, exp, "/");
}

function readCookie(name) {
	var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
	return "";
}
window.onload=readCookie;

function receipt() {
    var strText = document.getElementById("firstname").value;          
    var strText1 = document.getElementById("lastname").value;
    var result = strText + ' ' + strText1;
    document.getElementById('results').textContent = result;  
}

function termsOfUse() {
    window.open("https://www.dirtfill.com/terms.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}

function terms(f) {
    if(f.checkboxterms.checked == false){
        form_error += "Please check the Terms of Use box.\n";
    }
}

function confirm(){
    alert("This search is for contractors only. To continue click OK.");
}