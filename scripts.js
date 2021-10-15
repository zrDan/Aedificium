var openMenu = document.getElementById("openMenu");
var closeMenu = document.getElementById("closeMenu");
var navOptions = document.getElementById("navOptions");
var navList = document.getElementById("navList");
var windowSize = window.innerWidth;
var navLinks = document.querySelectorAll("li");

if (windowSize < 768) {
  navLinks.forEach((option) => {
    option.addEventListener("click", () => {
      openMenu.style.display = "block";
      closeMenu.style.display = "none";
      navOptions.style.display = "none";

      navOptions.style.animation = "disappear 1.5s";
      openMenu.style.animation = "appearMenu 1.5s";
    });
  });
}

openMenu.addEventListener("click", () => {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  navOptions.style.display = "block";

  closeMenu.style.animation = "appearMenu 1.5s";
  navOptions.style.animation = "appearMenu 1.5s";
});

closeMenu.addEventListener("click", () => {
  openMenu.style.display = "block";
  closeMenu.style.display = "none";
  navOptions.style.display = "none";

  navOptions.style.animation = "disappear 1.5s";
  openMenu.style.animation = "appearMenu 1.5s";
});

navList.addEventListener("click", () => {
  if (windowSize < 768) {
    openMenu.style.display = "block";
    closeMenu.style.display = "none";
    navOptions.style.display = "none";

    navOptions.style.animation = "disappear 1.5s";
    openMenu.style.animation = "appearMenu 1.5s";
  }
});

// Contadores
addEventListener("DOMContentLoaded", () => {
  const contadores = document.querySelectorAll(".contador_cantidad");
  const velocidad = 500;

  const animarContadores = () => {
    for (const contador of contadores) {
      const actualizarContador = () => {
        let cantidadMax = +contador.dataset.cantidadTotal,
          valor_actual = +contador.innerText,
          incremento = cantidadMax / velocidad;

        if (valor_actual < cantidadMax) {
          contador.innerText = Math.ceil(valor_actual + incremento);
          setTimeout(actualizarContador, 5);
        } else {
          contador.innerText = cantidadMax;
        }
      };

      actualizarContador();
    }
  };

  //In Scroll
  const mostrarContadores = (elementos) => {
    elementos.forEach((elemento) => {
      if (elemento.isIntersecting) {
        elemento.target.classList.add("animar");
        elemento.target.classList.remove("invisible");
        setTimeout(animarContadores(), 300);
      }
    });
  };

  const observer = new IntersectionObserver(mostrarContadores, {
    threshold: 0.9,
  });

  const elementosHTML = document.querySelectorAll(".contador");
  elementosHTML.forEach((elementoHTML) => {
    observer.observe(elementoHTML);
  });
});
