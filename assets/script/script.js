const button = document.querySelector(".button-add-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-tasks");

let minhaLista = [];

function adicionarNovaTarefa() {

    minhaLista.push({
        tarefa: input.value,
        concluida: false
    });

    input.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {
    /*<li class="task">
        <button class="button-with-icon"><i class="fa-solid fa-check"></i></button>
        <p>Teste</p>
        <button class="button-with-icon"><i class="fa-solid fa-trash"></i></button>
    </li>*/

    let novaLi = "";

    minhaLista.forEach((item, posicao) => {
        novaLi += `
        <li class="task ${item.concluida && "done"}">
            <button class="button-with-icon" onclick="concluirTarefa(${posicao})"><i class="fa-solid fa-check"></i></button>
            <p>${item.tarefa}</p>
            <button class="button-with-icon" onclick="deletarItem(${posicao})"><i class="fa-solid fa-trash"></i></button>
        </li>
        `;
    });

    listaCompleta.innerHTML = novaLi;

    localStorage.setItem("lista", JSON.stringify(minhaLista));
}

function concluirTarefa(posicao) {
    minhaLista[posicao].concluida = !minhaLista[posicao].concluida;

    mostrarTarefas();
}

function deletarItem(posicao) {

    minhaLista.splice(posicao, 1);

    mostrarTarefas();
}

function recarregarTarefas() {
    const tarefasDoLocalStorage = localStorage.getItem('lista')

    if (tarefasDoLocalStorage) {
        minhaLista = JSON.parse(tarefasDoLocalStorage)
    }

    mostrarTarefas()
}

recarregarTarefas();
button.addEventListener('click', adicionarNovaTarefa);