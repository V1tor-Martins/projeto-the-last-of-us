const botoesCarrossel= document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

botoesCarrossel.forEach( (botao, indice) => { 
    botao.addEventListener('click',() => {
        
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado')
        
        botao.classList.add('selecionado')
        
        const imagemativa = document.querySelector('.ativa');
        imagemativa.classList.remove('ativa');
        
        imagens[indice].classList.add('ativa')

       })
    })
