const concluirTarefa = (atualiza, id) => {
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'));

    tarefasCadastradas[id].concluida = !tarefasCadastradas[id].concluida

    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas));

    atualiza()
}

const BotaoConcluir = (atualiza, id) => {
    const botaoConcluir = document.createElement('button');
   
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerText = 'concluir';

    botaoConcluir.addEventListener('click', ()=> concluirTarefa(atualiza, id));
 
    return botaoConcluir;
}



export default BotaoConcluir;