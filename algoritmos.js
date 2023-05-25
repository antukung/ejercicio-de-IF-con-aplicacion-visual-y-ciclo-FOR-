const inputNombre= document.querySelector("#nombre");
const inputContrasenia= document.querySelector("#contrasenia");
const parrafoDeVerificacion= document.querySelector("#parrafo1")

const nombresDeusuarios= ["antu","nahir"];
const contraseniaDeUsuarios= ["antu1.","nahir.1"];

/*const NOMBRE_USUARIO_REGISTRADO= "antu";
const CONTRASENIA_USUARIO_REGISTRADO= "antu1.";
const NOMBRE_USUARIOS_REGISTRADO_DOS="nahir";
const CONTRASENIA_USUARIO_REGISTRADO_DOS="nahir.1";*/

function clickBoton(){
    let valorNombreUsuarioRegistrado=inputNombre.value;
    let valorContraniaUsuarioRegistrado=inputContrasenia.value;
    for (let i = 0; i < nombresDeusuarios.length; i++) {
       
        


    if (((nombresDeusuarios[i]==valorNombreUsuarioRegistrado)&&(valorContraniaUsuarioRegistrado==contraseniaDeUsuarios[i]))) {
        parrafoDeVerificacion.innerHTML= `verifica la contraseña`;
        i= nombresDeusuarios.length; 
     } else {
        parrafoDeVerificacion.innerHTML= `no verifica la contraseña`; 
     }
    }
}

 