import BotaoConcluir from "./concluiTarefa.js";
import BotaoDeletar from "./deletaTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";


export const handleNovoItem = (evento) => {
    evento.preventDefault();

    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

    const input = document.querySelector('[data-form-input]');
    const valor = input.value;

    const calendario = document.querySelector('[data-form-date]');
    const data = moment(calendario.value);
    const horario = data.format('HH:MM')
    const dataFormatada = data.format('DD/MM/YYYY');
    const concluida = false


    const dados = {
        valor,
        dataFormatada,
        horario,
        concluida
    };

    const tarefasAtualizadads = [...tarefas, dados];



    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadads));

    input.value = "";

    carregaTarefa();

}    

export const Tarefa = ({valor, horario, concluida}, id) => {
    
    const tarefa = document.createElement('li');
   

    const conteudo = `<p class="content">${horario} * ${valor}</p>`;
    if(concluida){
        tarefa.classList.add('done');
    }
    tarefa.classList.add('task');

    tarefa.innerHTML = conteudo;
    
    tarefa.appendChild(BotaoConcluir(carregaTarefa, id));
    tarefa.appendChild(BotaoDeletar(carregaTarefa, id));

    return tarefa;

}