// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let newGame = 0;
let friendsList = [];


function agregarAmigo() {
    // Validar q el nombre no sea vacio
    let friendName = document.getElementById('amigo').value;
    if (friendName) {
        friendsList.push(friendName);
        // crear elemento <li> para la lista de html
        const li = document.createElement('li');
        li.textContent = friendName;
        // Agregar el nuevo <li> a la lista en pantalla
        listaAmigos.appendChild(li);
    } else {
        alert('Por favor ingrese un nombre');
    }
    cleanBox();

}

function cleanBox() {
    document.querySelector('#amigo').value = '';
}