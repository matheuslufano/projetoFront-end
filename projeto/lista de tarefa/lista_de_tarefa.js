let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa() {
    //1º PEGAR O VALOR DIGITADO NO INPUT
    let valorInpute = input.value;

    //"if" if not vazio and nulo and indefinid
    if((valorInpute !=="" ) && (valorInpute!==null) && (valorInpute !==undefined)) {
        
        //Adicionar novo indice ao contador
        ++contador;
        //Elemento "nova tarefa"
        let novoItem = `
        <div id="${contador}" class="item">

            <div onclick="marcarTarefa(${contador})" class="item-icone">
                <i id="icone_${contador}" class="bi bi-circle"></i>
            </div>

            <div onclick="marcarTarefa(${contador})" class="item-nome">
                ${valorInpute}
            </div>

            <div class="item-botão">
                <button onclick = "deletar(${contador})" class="delete"><i class="bi bi-trash3"></i> Deletar</button>
            </div>

        </div>`;

        // ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem;

        //ZERRAR OS CAMPINHOS
        input.value = '';
        input.focus();

    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    console.log(classe);

    if (classe == "item") {
        item.classList.add("clicado");
    
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("bi-circle");
        icone.classList.add("bi-check-circle-fill");
    
        item.parentNode.appendChild(item);
    } else {
        item.classList.remove("clicado");
    
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("bi-check-circle-fill");
        icone.classList.add("bi-circle");
    }

}

input.addEventListener("keyup", function(event) {
    //if click is "tecla enter"
    if (event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})