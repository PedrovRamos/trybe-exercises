document.getElementById("elementoOndeVoceEsta")

document.getElementById("elementoOndeVoceEsta").parentElement.style.backgroundColor = "red"

document.getElementById("pai").firstElementChild

document.getElementById("elementoOndeVoceEsta").previousElementSibling

document.getElementById("elementoOndeVoceEsta").nextSibling

document.getElementById("elementoOndeVoceEsta").nextElementSibling

document.getElementById("pai").childNodes[5]

let novoElemento = document.createElement("p")
novoElemento.innerText = "testando meus conhecimentos"

document.getElementById("paiDoPai").appendChild(novoElemento)

let segundoElemento = document.createElement("a")
segundoElemento.innerText = "link aleatório"

document.getElementById("elementoOndeVoceEsta").appendChild(segundoElemento)

let terceiroElemento = document.createElement("h1")
terceiroElemento.innerText = "quase terminando"

document.getElementById("primeiroFilhoDoFilho").firstElementChild

let element = document.getElementById("paiDoPai").childNodes;

for (let index = 0; index < element.length; index += 1){
    elements = element[index]

    if (elements.className == primeiroFilho){
        element.removeChild(elements[index])
    } else if (elements.className == segundoEUltimoFilhoDoFilho){
        element.removeChild(elements[index])
    }
}

