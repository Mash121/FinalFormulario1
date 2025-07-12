

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.getElementById('enviar');
  btn.addEventListener('click', mostrarMensaje);
});

function mostrarMensaje(evt) {
  evt.preventDefault();

  let nombre = document.getElementById('nombre').value;
  let edad = parseInt(document.getElementById('edad').value);
  let mensajeUsuario = document.getElementById('msj').value;

  if (nombre.trim() === '') {
    showError('empty-name', "El nombre es obligatorio");
  } else {
    hideError('empty-name');
  }

  let mensajeFinal = `Bienvenido/a ${nombre}, usted `;
  mensajeFinal += (edad > 17)
    ? `es mayor, mensaje: ${mensajeUsuario}`
    : `es menor, no puede participar de nuestros servidores.
       Igual deje su mensaje: ${mensajeUsuario}`;

  let resultado = document.getElementById('resultado');
  if (!resultado) {
    resultado = document.createElement('div');
    resultado.id = 'resultado';
    document.getElementById('Formulario').appendChild(resultado);
  }

  resultado.innerText = mensajeFinal;
}

function showError(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = message;
    el.style.color = 'red';
    el.style.marginTop = '5px';
    el.style.fontWeight = 'bold';
  }
}

function hideError(id) {
  const el = document.getElementById(id);
  if (el) {
    el.innerText = '';
  }
}
