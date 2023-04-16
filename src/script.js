var $btnCancelar = document.getElementById("btnCancelar");
var $inputs = document.getElementsByClassName("input");
var $inputsRadio = document.getElementsByClassName("inputRadio");

$btnCancelar.addEventListener("click", cancelar);

function cancelar() {
    for (var i=0;i<$inputs.length;i++) {
        $inputs[i].value = '';
    }
    for (var j=0;j<$inputsRadio.length;j++) {
        $inputsRadio[j].checked = false;
    }
}