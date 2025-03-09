export const boton_añadir = (id) => {

const texto = document.createElement('p')
texto.textContent = 'ejemplo'
texto.setAttribute('class', 'tarjeta')
const elemnto_padre = document.getElementById(id)
const tarjeta = document.createElement('div');
// Agrega una clase para identificar la tarjeta individual
tarjeta.classList.add('tarjeta-item');
tarjeta.append(texto)
const div_tarjetas = elemnto_padre.querySelector('.div_tarjetas')
div_tarjetas.append(tarjeta);


const boton_tarjeta = document.createElement('button')
boton_tarjeta.setAttribute('class', 'boton-eliminar')
boton_tarjeta.textContent = 'x' 

tarjeta.append(boton_tarjeta)
}

export const modificarTarjeta = (tarjetaElement) => {

    const currentText = tarjetaElement.textContent;
    
    const inputElement = document.createElement('input');
    inputElement.type = 'text';
    inputElement.value = currentText;
    inputElement.style.width = '100%';
    
    tarjetaElement.textContent = '';
    tarjetaElement.append(inputElement);
    
    inputElement.focus();
    
    const saveEdit = () => {
      const newText = inputElement.value;
      tarjetaElement.textContent = newText;
    };
    
    inputElement.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        saveEdit();
      }
    });
    
}

export const eliminar_tarjeta = (element) => {
  // Si el botón corresponde a una tarjeta individual (creada en boton_añadir)
  const card = element.closest('.tarjeta-item');
  if (card) {
      card.remove();
      return;
  }
  // Si se ha hecho clic en el botón de eliminar de la lista (eliminar-lista)
  const lista_tarjetas = element.closest('.lista');
  if (lista_tarjetas) {
      const divTarjetas = lista_tarjetas.querySelector('.div_tarjetas');
      console.log(divTarjetas);

      if (divTarjetas) {
          // Elimina solo las tarjetas dentro de la lista correspondiente
          while (divTarjetas.firstChild) {
              divTarjetas.firstChild.remove();
          }
      }
  }
}
export const eliminar_cajista = (id) => {
const cajita = document.getElementById(id)
  cajita.remove()


}

