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
        /*
        // crear elemento <li> para la lista de html
        const li = document.createElement('li');
        li.textContent = friendName;
        // Agregar el nuevo <li> a la lista en pantalla
        listaAmigos.appendChild(li);*/
    } else {
        alert('Por favor ingrese un nombre');
    }
    cleanBox();

}

function cleanBox() {
    document.querySelector('#amigo').value = '';
}

function sortearAmigo() {
    //Generar un numero aleatorio teniendo en cuenta el tamaño de la lista
    //let generateNumber = Math.floor(Math.random()*friendsList.length);
    // El amigo secreto es el nombre q ocupa el elemento en la posición del número aleatorio generado
    //secretFriend = friendsList[generateNumber];
    secretFriend = friendsList[Math.floor(Math.random()*friendsList.length)];
    let chain = `Tu amigo secreto sorteado es ${secretFriend}`;
    showFinalLists(resultado,chain);
    //console.log(secretFriend);
    
}

function showFinalLists(lista, valor) {
    // Se usa para mostrar en pantalla la lista de amigos y el amigo secreto
    let li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);

}