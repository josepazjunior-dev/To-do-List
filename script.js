const button = document.querySelector(".botton-add-task")
const input = document.querySelector(".input-tesk")
const listaCompleta = document.querySelector(".liste-task")

let minhaListaDeIntens = []

function adicionarNovaTarefa(){

    minhaListaDeIntens.push({
        tarefa: input.value,
        concluido: false
    })



   mostrarTarefa()

}

function mostrarTarefa(){


    let novaLi = " "

    minhaListaDeIntens.forEach((item , posicao) => {

    novaLi = novaLi + `
    <li class="task ${item.concluido && "done"}">
    <img src="./img/checked.png" alt="botao-de-checked" onclick="concluirTarefa(${posicao})">
    <p>${item.tarefa}</p>
    <img src="./img/trash.png" alt="botao-de-lixeira" onclick="deletarItem(${posicao})">
    </li>
    
    
    `

    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem("lista", JSON.stringify(minhaListaDeIntens))

}

function concluirTarefa(posicao){
    minhaListaDeIntens[posicao].concluido = !minhaListaDeIntens[posicao].concluido

    mostrarTarefa()


}

function deletarItem(posicao){

    minhaListaDeIntens.splice(posicao, 1)

    mostrarTarefa()

}

function recerregarTarefas(){
    const tarefasDoLocalStorage = localStorage.getItem("lista")

    if(tarefasDoLocalStorage){

    minhaListaDeIntens = JSON.parse(tarefasDoLocalStorage)
    }
    mostrarTarefa()

}

recerregarTarefas()

button.addEventListener("click", adicionarNovaTarefa)