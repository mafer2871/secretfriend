// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friendsList = [];
let secretFriend = '';
let numbersList = [];



function agregarAmigo() {
    // Validar q el nombre no sea vacio
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

function cleanBox() {
    document.querySelector('#amigo').value = '';
}

function cleanAmigos() {
    // Limpia de la pantalla la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
}


function sortearAmigo() {
    // Para realizar el sorteo debe haber al menos 2 amigos
    if (friendsList.length < 2) {
        alert('Debe de haber al menos dos amigos para sortear');
    } else {
        secretFriend = generateFriendName();
        if (secretFriend) {
            let chain = `Tu amigo secreto sorteado es ${secretFriend}`;
            cleanAmigos();
            resultado.innerHTML = "";
            showFinalLists(resultado,chain);
        }
    }
}

function generateFriendName() {
    let generatedNumber = Math.floor(Math.random()*friendsList.length);
    
    //Controlar si se han sorteado todos los amigos
    if (numbersList.length == friendsList.length) {
		alert('Ya se sortearon todos los amigos registrados. El juego se reiniciará automáticamente');
        setTimeout(() => {
            location.reload();
        }, 1000);

    } else {
 
        // Validar si el número ya se ha generado, si ya existe se debe volver a generar, sino guardar en la lista
        if (numbersList.includes(generatedNumber)) { 
            return generateFriendName();
        } else {
            numbersList.push(generatedNumber);
            console.log(numbersList);
            return friendsList[generatedNumber];
        }   
    }
}


function showFinalLists(lista, valor) {
    // Se usa para mostrar en pantalla la lista de amigos y el amigo secreto
    let li = document.createElement('li');
    li.textContent = valor;
    lista.appendChild(li);
}

function firstCapital(cadena) {
    if (cadena.length === 0) return ''; // Si la cadena está vacía, devolverla tal cual.
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
}