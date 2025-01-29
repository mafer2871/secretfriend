// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let newGame = 0;
let friendsList = [];
let secretFriend = '';


function agregarAmigo() {
    // Validar q el nombre no sea vacio
    let friendName = document.getElementById('amigo').value;
    if (friendName) {
        friendsList.push(friendName);
        showFinalLists(listaAmigos, friendName);
    
    } else {
        alert('Por favor ingrese un nombre');
    }
    cleanBox();

}

function cleanBox() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    /* De acuerdo al tamaño de la lista de amigos, genera un numero aleatorio 
    y busca en la lista el elemento en esa posición */
    secretFriend = friendsList[Math.floor(Math.random()*friendsList.length)];
    let chain = `Tu amigo secreto sorteado es ${secretFriend}`;
    // Limpia de la pantalla la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    showFinalLists(resultado,chain);
    
}

function showFinalLists(lista, valor) {
    // Se usa para mostrar en pantalla la lista de amigos y el amigo secreto
    let li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
}