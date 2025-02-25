// definición de variables
let friendsList = [];
let sortedFriends = [];
let secretFriend = '';
let numbersList = [];
let gameStarted = false;
let currentFriendIndex = 0;


function agregarAmigo() {

    // Impedir q se agreguen nombres a lista hasta no terminar este sorteo
    if (gameStarted){
        //alert('No se puede ingresar más nombres hasta terminar este sorteo');
        location.reload();
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
        let addButton = document.getElementById('add');
        addButton.textContent = "Reiniciar";
		// Verificar si ya se asignaron todos los amigos secretos
		if (sortedFriends.length === friendsList.length) {
            alert('Ya se sortearon todos los amigos registrados.  Para comenzar un nuevo juego, presiona Reiniciar');
			return; 
		}
		 // Tomar el siguiente amigo que aún no tiene asignado un amigo secreto
		currentFriendIndex = sortedFriends.length;
		let generatedNumber = Math.floor(Math.random() * friendsList.length);

		// Verificar que no se sortee a sí mismo ni que ya haya sido asignado
		while (generatedNumber === currentFriendIndex || numbersList.includes(generatedNumber)) {
			generatedNumber = Math.floor(Math.random() * friendsList.length);
		}
		// Guardar indices generados y amigos sorteados
		numbersList.push(generatedNumber); 
		sortedFriends.push(friendsList[generatedNumber]); 
        let chain = `El amigo secreto de ${friendsList[currentFriendIndex]} es ${friendsList[generatedNumber]}`;
        console.log(chain);
        cleanAmigos();
        resultado.innerHTML = "";
        showFinalLists(resultado,chain);
     
    }
} //fin sortearAmigo

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