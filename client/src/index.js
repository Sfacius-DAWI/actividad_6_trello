import './styles.css';
import {tarjeta_generica} from './utils/CrearCajitas.js';
import {boton_añadir, modificarTarjeta, eliminar_tarjeta, eliminar_cajista} from './utils/gestionar_tarjetas.js';

console.log('el js sigue funcionando');

addEventListener('DOMContentLoaded', () => {
    console.log('el evento DOMContentLoaded ha ocurrido');
    boton_crear()
    loadBoxesFromDb();

    const boton_crear_selector = document.getElementById('boton_crear_cajita')
boton_crear_selector.addEventListener('click', () => {
  const titulo = prompt('Introduce el título de la lista');
  if (titulo) {
    tarjeta_generica(titulo);
  }
})

});


 document.addEventListener('click', (e) => {
    if ( e.target.matches('.boton-eliminar') || e.target.matches('.eliminar-lista') ) {
        console.log('se ha seleccionado para eliminar');
        eliminar_tarjeta(e.target);
    }

    if(e.target.matches('.crear-tarjeta')) {
      console.log('se ha seleccionado para añadir una tarjeta');
      const parentId = e.target.parentElement.id;
      console.log(parentId);
      boton_añadir(parentId);
  }

  if(e.target.matches('.Eliminar_caja')) {
    console.log('ha entrado en eliminar lista')
    console.log(e.target.parentElement.id)
    eliminar_cajista(e.target.parentElement.id)

  }
});

document.addEventListener('dblclick', (event) => {
  const tarjeta = event.target.closest('.tarjeta');
  if (tarjeta) {
      modificarTarjeta(tarjeta);
  }
});
 





const loadBoxesFromDb = async () => {
  try {
    const res = await fetch('/boxes');
    const boxes = await res.json();
    boxes.forEach(box => {
      tarjeta_generica(box.titulo);
    });
  } catch (error) {
    console.error('Error al cargar cajas desde la BD:', error);
  }
}

const boton_crear = () => {
  const div_principal = document.getElementById('tablero')
  const boton_crear_cajita = document.createElement('button')
  boton_crear_cajita.textContent = '+' 
  boton_crear_cajita.setAttribute('id', 'boton_crear_cajita')
  div_principal.append(boton_crear_cajita)
  
}

