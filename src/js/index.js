const btnGerar = document.getElementById('btn-gerar-valor');
const btnContinue = document.getElementById('btn-continue');
let resultados = document.querySelectorAll('.pontuacao');
let yourResult = document.querySelector('.valor');
let resultadoMedia = 0;




btnGerar.addEventListener('click', () =>{
    fetch("data.json").then((response) => {
        response.json().then((valores) => {
            for (let i = 0; i < valores.length; i++) {
                resultadoMedia += valores[i].score
                yourResult.innerHTML = ~~(resultadoMedia/valores.length)
                valorFinal = valores[i].score;
                resultados[i].innerHTML = valorFinal;
    
            };
        });
    });

    btnGerar.classList.add('sumir')
    btnContinue.classList.remove('sumir')
});