var botonEncriptar = document.querySelector(".boton_encriptador");
var botonDesencriptar = document.querySelector(".boton_desencriptador");
var muñeco = document.querySelector(".contenedor_imagen");
var resultado = document.querySelector(".texto_resultado");
var contenedor = document.querySelector(".section_2");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick =desencriptar;

function encriptar (){
    ocultarAdelante();
    var contenedor_boton = recuperarTexto()
    resultado.textContent = encriptarTexto(contenedor_boton);    
}

function desencriptar (){
    ocultarAdelante();
    var contenedor_boton = recuperarTexto();
    resultado.textContent = desencriptarTexto(contenedor_boton);    
}

/*function recuperarTexto(){
    muñeco.classList.add("ocultar")
    contenedor.classList.add("ocultar");   lo de abajo lo agregue por chatp
}*/

function recuperarTexto() {
    var texto_entrada = document.querySelector(".texto_entrada");
    return texto_entrada.value;
}


function encriptarTexto(texto /*mensaje*/){
    /*var texto = mensaje;*/
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "ai"
        } 
        else if(texto[i] == "e"){
            textofinal = textofinal + "enter"
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "imes"
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "ober"
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "ufat"
        }
        else{
            textofinal = textofinal + texto [i]
        }
    }
    return textofinal;
}

function desencriptarTexto(texto /*mensaje*/){
    /*var texto = mensaje;*/
    var textofinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textofinal = textofinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textofinal = textofinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textofinal = textofinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textofinal = textofinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textofinal = textofinal + "u"
            i = i+3;
        }
        else{
            textofinal = textofinal + texto [i];
        }
    }
    return textofinal;
}

/*const boton_copiar = document.querySelector(".boton_copiar");
    boton_copiar.addEventListener("click", copiar=() => {
    var contenido = document.querySelector(".texto_resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log ("hola");
})*/

const boton_copiar = document.querySelector(".boton_copiar");
boton_copiar.addEventListener("click", copiar); // Corrige el error de asignación de evento utilizando addEventListener en lugar de =

function copiar() {
    var contenido = document.querySelector(".texto_result");
}



    
        
    

