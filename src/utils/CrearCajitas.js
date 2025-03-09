export const tarjeta_generica = (titulo) => {
    const por_hacer = document.createElement('div')
    por_hacer.setAttribute('class', 'lista');
    por_hacer.setAttribute('id', titulo)
    const tablero = document.getElementById('tablero');
    tablero.append(por_hacer);

    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'lista-titulo')
    h1.textContent = titulo;
    por_hacer.append(h1)

  
    const div_todas_tarjetas = document.createElement('div')
    div_todas_tarjetas.setAttribute('class', 'div_tarjetas')
  
    div_todas_tarjetas.style.minHeight = '50px';

    div_todas_tarjetas.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    div_todas_tarjetas.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedCard = document.getElementById(draggedId);
        if(draggedCard && draggedCard.classList.contains('tarjeta-item')){
            div_todas_tarjetas.appendChild(draggedCard);
        }
    });
    por_hacer.append(div_todas_tarjetas)
    
    
    por_hacer.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    por_hacer.addEventListener('drop', (e) => {
        e.preventDefault();
        const draggedId = e.dataTransfer.getData('text/plain');
        const draggedElement = document.getElementById(draggedId);
        if(draggedElement && draggedElement.classList.contains('div_tarjetas')){

            const btn = por_hacer.querySelector('.crear-tarjeta');
            por_hacer.insertBefore(draggedElement, btn);
        }
    });
    
    const boton_añadir = document.createElement('button');
    boton_añadir.setAttribute('class','crear-tarjeta' )
    boton_añadir.textContent = 'Agregar';
    por_hacer.append(boton_añadir);

   
    const boton_eliminar = document.createElement('button');
    boton_eliminar.setAttribute('class', 'eliminar-lista');
    boton_eliminar.textContent = 'Eliminar';
    por_hacer.append(boton_eliminar);
    

    const Eliminar_caja = document.createElement('button');
    Eliminar_caja.setAttribute('class', 'Eliminar_caja');
    Eliminar_caja.textContent = 'Elimina caja';
    por_hacer.append(Eliminar_caja);

}


