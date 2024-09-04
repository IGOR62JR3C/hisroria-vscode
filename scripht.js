// Seleciona todos os botões com a classe 'btn-proximo'
const buttons = document.querySelectorAll('.btn-proximo');

// Adiciona um listener de clique para cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtém o elemento atualmente ativo
        const currentActive = document.querySelector('.ativo');

        // Determina o próximo passo com base no atributo 'data-proximo' do botão clicado
        const nextStepId = `passo-${button.getAttribute('data-proximo')}`;
        const nextStep = document.getElementById(nextStepId);

        // Verifica se o próximo passo existe antes de tentar adicionar a classe 'ativo'
        if (nextStep) {
            // Remove a classe 'ativo' do elemento atualmente ativo
            currentActive?.classList.remove('ativo');

            // Adiciona a classe 'ativo' ao próximo passo
            nextStep.classList.add('ativo');
        }
    });
});
