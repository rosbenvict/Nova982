function mostrarSeccion(id) {
  secciones.forEach(sec => {
    if (sec.id === id) {
      sec.classList.add('active');
    } else {
      sec.classList.remove('active');
    }
  });
}


