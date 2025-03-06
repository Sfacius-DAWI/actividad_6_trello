
import './styles.css';
import {tarjeta_generica} from'./utils/CrearCajitas.js'
import {boton_añadir} from './utils/gestionar_tarjetas.js'

console.log('el js sigue funcionando');

addEventListener('DOMContentLoaded', () => { 
console.log('el evento DOMContentLoaded ha ocurrido');
cargartarjetas();

  // Mover la selección de botones aquí dentro
  const botones_añadir = document.querySelectorAll('.crear-tarjeta'); // O el selector correcto
  console.log('Botones encontrados:', botones_añadir.length); // Verificar cuántos encuentra

botones_añadir.forEach(boton => {
    boton.addEventListener('click', () => { 
        console.log(boton.parentElement.id);
        boton_añadir(boton.parentElement.id)
    });
});
})



const cargartarjetas = () => {
tarjeta_generica('por_hacer')
tarjeta_generica('processo')
tarjeta_generica('finalizada')

}

