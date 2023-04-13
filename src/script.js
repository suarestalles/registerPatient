var $btnSalvar = document.getElementById("btnSalvar");
var $btnCancelar = document.getElementById("btnCancelar");
var $planoSim = document.getElementById("planoSim");
var $planoNao = document.getElementById("planoNao");
var $dadosPlanoSaude = document.getElementById("dadosPlanoSaude");
var $htmlDadosPlanoSaude =  "<label for='matriculaPlano' class='labelMatriculaPlano' >Matrícula do Plano:"  + 
                            "<input type='number'  name='matriculaPlano' id='matriculaPlano' placeholder='Ex.: 20210725020' required> " + 
                            "</label>" + 
                            "<label for='vencimentoCarteirinha' class='labelVencimentoCarteirinha' >Vencimento da Carteirinha" + 
                            "<input type='date'  name='vencimentoCarteirinha' id='vencimentoCarteirinha' required>" +
                            "</label>";
var $inputs = document.getElementsByClassName("input");
var $inputsRadio = document.getElementsByClassName("inputRadio");

$dadosPlanoSaude.innerHTML = '';

$planoSim.addEventListener("click", mostrarCamposPlanoSaude)
$planoNao.addEventListener("click", esconderCamposPlanoSaude)
$btnCancelar.addEventListener("click", cancelar);

function mostrarCamposPlanoSaude() {
    $dadosPlanoSaude.innerHTML = $htmlDadosPlanoSaude;
}

function esconderCamposPlanoSaude() {
    $dadosPlanoSaude.innerHTML = '';
}

function cancelar() {
    for (var i=0;i<$inputs.length;i++) {
        $inputs[i].value = '';
    }
    for (var j=0;j<$inputsRadio.length;j++) {
        $inputsRadio[j].checked = false;
    }
}