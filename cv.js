document.getElementById('botón').onclick = function enviarCorreo(insTextoComp) {
    var sEmail = "williamsonbu@outlook" ;
    if(sEmail != null) {
        var sLink = "mailto:" + escape(sEmail)
         + "?subject=" + escape("Me contacto por cv online")
         + "&body=" + insTextoComp;
        window.location.href = sLink;
    }
    
}

const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    

});



