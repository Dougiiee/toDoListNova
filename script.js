const texto = document.getElementById('inputTarefa');
const botao = document.getElementById('btnAdicionar');
const tarefa = document.getElementById('listaTarefas');

let tarefas = [];

function salvarTarefas() {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
}



botao.addEventListener('click',function(){
    const textoDigitado = texto.value;

    if(textoDigitado !== '') {
        tarefas.push({texto : textoDigitado, concluida: false});
        salvarTarefas();
        renderizarTarefas();
        texto.value = '';

        const remover = document.createElement('button');
        remover.textContent = 'Remover';
        li.appendChild(remover); 
        
        remover.addEventListener('click', function(){
            li.remove();
        })

        li.addEventListener('click', function(){
            li.classList.toggle('concluida')
        })
    }
} )



const tarefasSalvas = localStorage.getItem('tarefas');
if (tarefasSalvas) {
    tarefas = JSON.parse(tarefasSalvas);
    renderizarTarefas();
}

function renderizarTarefas() {
    tarefa.innerHTML = '';

    tarefas.forEach(function (item) {
        const li = document.createElement('li');
        li.textContent = item.texto;

        if (item.concluida) {
            li.classList.add('concluida')
        }

        const remover = document.createElement('button');
        remover.textContent = 'remover';
        
        
        remover.addEventListener('click', function(){
            const index = tarefas.indexOf(item);
            tarefas.splice(index, 1);
            salvarTarefas();
            renderizarTarefas();
        })
            

        li.addEventListener('click', function() {
        item.concluida = !item.concluida;
        salvarTarefas();
        li.classList.toggle('concluida');
        })
            li.appendChild(remover);
            tarefa.appendChild(li);

        })

  


    
}