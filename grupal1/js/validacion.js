
    let button = document.getElementById("regBtn")
button.addEventListener("click",function(){
    

    let check = document.getElementById("terminos").checked
    let contra = document.getElementById("password1").value
    let contra1 = document.getElementById("password2").value
    let apellido = document.getElementById("apellido").value
    let mail = document.getElementById("email").value
    let nombre = document.getElementById("nombre").value
    
   
    if((check)&&(contra.length>0)&&(contra == contra1)&&(apellido.length>0)&&(mail.length>0)&&(nombre.length>0)){
    showAlertSuccess()
    }
    else {
        showAlertError()
    }
})
    
    
    function showAlertSuccess() {
        document.getElementById("alert-success").classList.add("show");
    }
    
    function showAlertError() {
        document.getElementById("alert-danger").classList.add("show");
    }