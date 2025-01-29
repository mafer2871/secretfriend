// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let newGame = 0;
let friendsList = [];


function agregarAmigo() {
    // Validar q el nombre no sea vacio
    let friendName = document.getElementById('amigo').value;
    if (friendName) {
        friendsList.push(friendName);
		console.log(friendsList);

    } else {
        alert('Por favor ingrese un nombre');
    }
    cleanBox();

}

function cleanBox() {
    document.querySelector('#amigo').value = '';
}