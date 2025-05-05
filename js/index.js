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
  
  const images = document.querySelectorAll('.carousel-img');
  const textContainer = document.getElementById('carousel-text');

  const textos = [
    `
    <h1 class="text-9xl font-bold leading-tight">SERVICIOS <br />POLICIALES <br />DIGITALES</h1>
    <p class="text-yellow-400 mt-4 text-5xl italic">Acortando tiempo y distancia</p>
    <hr class="w-145 mt-5 font-bold text-amarillo-claro" />
    <hr class="w-145 font-bold text-amarillo-claro" />
    <p class="mt-2 text-3xl font-light">Accede a servicios policiales en línea de forma rápida, segura y disponible las 24 horas</p>
    <button class="mt-6 bg-amarillo-claro text-black font-semibold py-2 px-4 rounded-xl cursor-pointer hover:bg-fondo hover:text-verde-oscuro">CONOCE MÁS AQUÍ</button>
    `,
    `
    <h1 class="text-9xl font-bold leading-tight">Cuidamos<br /> tu mundo digital</h1>
    <hr class="w-145 mt-5 font-bold text-amarillo-claro" />
    <hr class="w-145 font-bold text-amarillo-claro" />
    <p class="mt-2 text-3xl font-light">Consejos y herramientas para <br/> una navegación segura para toda la familia.</p>
    <button class="mb-15 mt-6 bg-amarillo-claro text-black font-semibold py-2 px-4 rounded-xl cursor-pointer hover:bg-fondo hover:text-verde-oscuro">CONOCE MÁS AQUÍ</button>
    `,
    `
    <h1 class="text-9xl font-bold leading-tight">Alerta de <br/> ciberamenaza!</h1>
    <hr class="w-145 mt-5 font-bold text-amarillo-claro" />
    <hr class="w-145 font-bold text-amarillo-claro" />
    <p class="mt-2 text-2xl font-light">Conoce las estafas más recientes y cómo protegerlas</p>
    <button class="mb-15  mt-6 bg-amarillo-claro text-black font-semibold py-2 px-4 rounded-xl cursor-pointer hover:bg-fondo hover:text-verde-oscuro">PROTÉGETE AHORA</button>
    `
  ];

  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.style.opacity = i === index ? 1 : 0;
    });
    textContainer.innerHTML = textos[index];
    currentIndex = index;
  }

  // Auto-cambio opcional
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 7000); // cambia cada 7 segundos