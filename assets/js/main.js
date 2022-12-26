// ¡Bienvenidos y Bienvenidas a nuestro primer desafío!

// Durante estas cuatro semanas, vamos a trabajar en una aplicación que encripta textos, así podrás intercambiar mensajes secretos con otras personas que sepan el secreto de la encriptación utilizada.

// Las "llaves" de encriptación que utilizaremos son las siguientes:

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function encrypt(text) {
    let enc = text
        .replaceAll('e', 'enter')
        .replaceAll('i', 'imes')
        .replaceAll('o', 'ober')
        .replaceAll('a', 'ai')
        .replaceAll('u', 'ufat');

    return enc;
}

function decrypt(text) {
    let dsc = text
        .replaceAll('enter', 'e')
        .replaceAll('imes', 'i')
        .replaceAll('ober', 'o')
        .replaceAll('ai', 'a')
        .replaceAll('ufat', 'u');

    return dsc;
}

const form = document.getElementById('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const buttonValue = e.target.querySelector('button[type="submit"]:focus').value;
    const text = e.target.txt.value;

    if (buttonValue === 'encrypt') {
        const encryptedText = encrypt(text);
        document.getElementById('enc').value = encryptedText;
    } else if (buttonValue === 'decrypt') {
        const decryptedText = decrypt(text);
        document.getElementById('dsc').value = decryptedText;
    }
});

const txtInput = document.getElementById("txt");
txtInput.addEventListener("input", function (e) {
    const text = e.target.value;

    const textValidado = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    const enc = encrypt(textValidado);
    document.getElementById("enc").value = enc;

    const dsc = decrypt(textValidado);
    document.getElementById("dsc").value = dsc;
});




