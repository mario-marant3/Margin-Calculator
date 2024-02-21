let flagInput = 0;
let flagIVA = false;

function ativarflag(num){
    switch (num){
        case 1: flagInput = 1;
                break;
        case 2: flagInput = 2;
                break;
        default: flagInput = 0;
                    break;
    };

};

function comSemIva(){
    temp1 = document.getElementById("cIva");
    temp2 = document.getElementById("sIva");
    if(temp1.style.visibility === "visible"){
        temp2.style.visibility = "visible";
        temp1.style.visibility = "hidden";
        flagIVA = false;
    } else {
        temp1.style.visibility = "visible";
        temp2.style.visibility = "hidden";
        flagIVA = true;
    }
}

function calculadora(temp){
    if(flagInput === 1){
        textInput = document.getElementById("preco");
    } else if(flagInput === 2){
        textInput = document.getElementById("margem");
    } else {
        return;
    };
    if(temp === 'p' || temp ===  'b'){
        switch(temp){
            case 'p':{
                textInput.value += '.';
                break;
            };
            case 'b':{
                textInput.value = textInput.value.slice(0, -1);
                break;
            };
            default:{
                return;
            };
        };
    } else {
        textInput.value += temp;
    };
};

function calcularMargens(){
    if(document.getElementById("preco").value === '' || document.getElementById("margem").value === ''){
        alert("Preencha todos os campos corretamente.")
        return;
    }
    let temp = document.getElementById("resultados");
    temp.style.visibility = "visible";
    let preco = parseFloat(document.getElementById("preco").value);
    let margem = parseFloat(document.getElementById("margem").value);
    let totalComIva = preco;
    let totalSemIva = preco;
    if(flagIVA){
        totalSemIva = totalComIva / 1.23;
    } else {
        totalComIva = totalSemIva * 1.23;
    }
    let margemComIva = totalComIva + (totalComIva*(margem/100));
    let margemSemIva = totalSemIva + (totalSemIva*(margem/100));
    let lucroLiquido = margemComIva - totalComIva;
    let lucroBruto = margemSemIva - totalSemIva;

    document.getElementById("precoComIva").innerText = totalComIva.toFixed(2);
    document.getElementById("precoSemIva").innerText = totalSemIva.toFixed(2);
    document.getElementById("resultadoMargemIva").innerText = margemComIva.toFixed(2);
    document.getElementById("resultadoMargemSemIva").innerText = margemSemIva.toFixed(2);
    document.getElementById("lucroBruto").innerText = lucroLiquido.toFixed(2);
    document.getElementById("lucroLiquido").innerText = lucroBruto.toFixed(2);
}