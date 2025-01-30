// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsList = [];
let secretFriend = '';
let numbersList = [];
let gameStarted = false;



function agregarAmigo() {

    // Impedir q se agreguen nombres a lista hasta no terminar este sorteo
    if (gameStarted){
        alert('No se puede ingresar más nombres hasta terminar este sorteo');
    } else {
        // Validar q el nombre no sea vacio o tenga números
        let validCharacters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ ]+$/; // Solo letras y espacios
        let friendName = firstCapital(document.getElementById('amigo').value.trim());
        
        if (friendName == '' || !validCharacters.test(friendName)) {
            alert('Nombre inconsistente.  Por favor ingrese un nombre de amig@ ');  
        } else {
            friendsList.push(friendName);
            console.log(friendsList);
            showFinalLists(listaAmigos, friendName);
        }
        cleanBox();
    }
} //fin agregarAmigo

function cleanBox() {
    document.querySelector('#amigo').value = '';
}

function cleanAmigos() {
    // Limpia de la pantalla la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
} //fin cleanAmigos


function sortearAmigo() {
    // Para realizar el sorteo debe haber al menos 2 amigos
    if (friendsList.length < 2) {
        alert('Debe de haber al menos dos amigos para sortear');
    } else {
        gameStarted = true;
        secretFriend = generateFriendName();
        if (secretFriend) {
            let chain = `Tu amigo secreto sorteado es ${secretFriend}`;
            cleanAmigos();
            resultado.innerHTML = "";
            showFinalLists(resultado,chain);
        }
    }
} //fin sortearAmigo

function generateFriendName() {
    let generatedNumber = Math.floor(Math.random()*friendsList.length);
    
    //Controlar si se han sorteado todos los amigos
    if (numbersList.length == friendsList.length) {
		alert('Ya se sortearon todos los amigos registrados. El juego se reiniciará automáticamente');
        setTimeout(() => {
            location.reload();
        }, 1000);

    } else {
        // Validar para no repetir indices 
        if (numbersList.includes(generatedNumber)) { 
            return generateFriendName();
        } else {
            numbersList.push(generatedNumber);
            console.log(numbersList);
            return friendsList[generatedNumber];
        }   
    }
} // fin generateFriendName

function showFinalLists(lista, valor) {
    // Se usa para mostrar en pantalla la lista de amigos y el amigo secreto
    let li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
} // fin showFinalLists

function firstCapital(cadena) { 
    // Coloca la primera letra mayúscula
    if (cadena.length === 0) return ''; // Si la cadena está vacía, devolverla tal cual.
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
} //fin firstCapital