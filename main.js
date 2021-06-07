// No javaScript as funções podem ser criadas em qualquer ordem

// capturar o evento de submit do formulario.
const form = document.querySelector('.formulario');

//Não deixar o site reiniciar quando enviar.
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('.peso');
    const inputAltura = e.target.querySelector('.altura');

    //pegando os valores:
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    console.log(peso,altura);

    //tratamento de erro-->
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura){
        setResultado('Altura inválida', false);
        return
    }
 
    const imc = getImc(peso, altura);
    const nivelimc = GetNivelImc(imc);
    console.log(imc,nivelimc);

    const msg = `Seu IMC é ${imc} (${nivelimc}).`;

    setResultado(msg, true);


});

function GetNivelImc (imc) {
    const estado = ['Abaixo do peso','Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau2' ,'Obesidade grau 3'];
    
    if (imc >= 39.9)  return estado[5];
    if (imc>= 34.9)   return estado[4];
    if (imc>= 29.9)   return estado[3];
    if (imc>= 24.9)   return estado[2];
    if (imc>= 18.5)   return estado[1];
    if (imc < 18.5)   return estado[0];

}


function getImc(peso, altura) {
    const imc = peso/ altura **2;
    return imc.toFixed(2);

}

//Criar um elemento e retorna ele.
function criaP () {
    const p = document.createElement('p');
    return p;
    
}


function setResultado(msg, valido) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = '';
    const p = criaP();
    if (valido) {p.classList.add('paragrafo-resposta')}
    else {p.classList.add('bad')}
    p.innerHTML = msg
    resultado.appendChild(p);

}


