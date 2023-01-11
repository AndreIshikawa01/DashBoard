// MENU RESPONSIVO

document.getElementById("responsive").onclick = function () {
    if (menu.style.display == 'block'){
        menu.style.display = 'none'
    } else {
        menu.style.display = 'block'
    }
}

window.onresize = function () {
    if (window.innerWidth <= 800) {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  };

///////


// Menu marcado
const menu = document.querySelector('#menu');
menu.addEventListener('click', (event) => {

const target = event.target;

if (target.tagName === 'A') {
menu.querySelectorAll('a').forEach((link) => {
link.classList.remove('active');
});
target.classList.add('active');
  }
});

//////////

// Gerador de frases(comentarios)
const comentarios = [
  "Excelente!",
  "Perfeito!",
  "Brilhante!",
  "Genial!",
  "Espetacular!",
  "Muito ruim!",
  "Péssimo!"
];

function fraseAleatorio() {

  const divs = document.querySelectorAll("#frases");

  for ( let i = 0; i < divs.length; i++){
  const fraseRandom = comentarios[Math.floor(Math.random() * comentarios.length)];
  divs[i].innerHTML = fraseRandom;
  }
}

window.onload = fraseAleatorio

//////


///// Alert
document.getElementById("fixed-button").onclick = function () {
alert("Os comentários atualizam com 7 frases aléatorias toda vez que a página é atualizada")
};