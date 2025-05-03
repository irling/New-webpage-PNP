document.addEventListener('click',function () {
    // Aquí va el código que manipula los elementos del DOM
  
    const toggleUser = document.getElementById('toggleSelectUser');
    const toggleIdioma = document.getElementById('toggleSelectIdioma');
  
    const userOptions = document.getElementById('userOptionsUser');
    const idiomaOptions = document.getElementById('userOptionsIdioma');
  
    // Al hacer clic en el icono de "usuario"
    toggleUser.addEventListener('click', function (e) {
      e.preventDefault();
      // Cierra el otro menú y abre el de usuario
      userOptions.classList.toggle('hidden');
      idiomaOptions.classList.add('hidden');
    });
  
    // Al hacer clic en el icono de "idioma"
    toggleIdioma.addEventListener('click', function (e) {
      e.preventDefault();
      // Cierra el otro menú y abre el de idioma
      idiomaOptions.classList.toggle('hidden');
      userOptions.classList.add('hidden');
    });
  
    // Cerrar los menús si se hace clic fuera de ellos
    document.addEventListener('click', function (e) {
      if (!e.target.closest('.relative')) {
        userOptions.classList.add('hidden');
        idiomaOptions.classList.add('hidden');
      }
    });
  });
  