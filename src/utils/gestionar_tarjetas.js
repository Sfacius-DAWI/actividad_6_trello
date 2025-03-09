export const boton_añadir = (id) => {

const texto = document.createElement('p')
texto.textContent = 'ejemplo'
texto.setAttribute('class', 'tarjeta')
const elemnto_padre = document.getElementById(id)
const tarjeta = document.createElement('div');

tarjeta.setAttribute('draggable', true);
tarjeta.id = 'tarjeta-' + Date.now();
tarjeta.classList.add('tarjeta-item');
tarjeta.append(texto)
const div_tarjetas = elemnto_padre.querySelector('.div_tarjetas')
div_tarjetas.append(tarjeta);


tarjeta.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', tarjeta.id);
});

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

  const card = element.closest('.tarjeta-item');
  if (card) {
      card.remove();
      return;
  }

  const lista_tarjetas = element.closest('.lista');
  if (lista_tarjetas) {
      const divTarjetas = lista_tarjetas.querySelector('.div_tarjetas');
      console.log(divTarjetas);

      if (divTarjetas) {

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

