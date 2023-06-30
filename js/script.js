/*#############################################################################################*/
// CAMBIAR LOS TEXTOS EN EL BANNER SUPERIOR

  window.addEventListener('DOMContentLoaded', function () {
    var bannerParagraphs = document.querySelectorAll('.banner p');
    var bannerColors = ['#035303', '#3de4ac', '#a2adb1']; // Colores diferentes para cada párrafo
    var delay = 4000; // 4 segundos

    function showNextParagraph(index) {
      bannerParagraphs[index].style.display = 'block';
      document.querySelector('.banner').style.backgroundColor = bannerColors[index]; // Establece el color del div

      if (index < bannerParagraphs.length - 1) {
        setTimeout(function () {
          hideCurrentParagraph(index);
          showNextParagraph(index + 1);
        }, delay);
      } else {
        setTimeout(function () {
          hideCurrentParagraph(index);
          showNextParagraph(0);
        }, delay);
      }
    }

    function hideCurrentParagraph(index) {
      bannerParagraphs[index].style.display = 'none';
    }

    showNextParagraph(0);
  });

/*#############################################################################################*/
// DESPLAZAMIENTO DE LAS IMÁGENES DEL BANNER PRINCIPAL
document.addEventListener('DOMContentLoaded', function() {
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  let currentSlide = 0;
  let carouselInterval;

  function showSlide(n) {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    dots.forEach(function(dot) {
      dot.classList.remove('active');
    });
    slides[n].classList.add('active');
    dots[n].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  function startCarousel() {
    carouselInterval = setInterval(nextSlide, 8000);
  }

  function bindEvents() {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
      prevSlide();
      clearInterval(carouselInterval);
      startCarousel();
    });

    nextButton.addEventListener('click', function() {
      nextSlide();
      clearInterval(carouselInterval);
      startCarousel();
    });

    dots.forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        showSlide(index);
        clearInterval(carouselInterval);
        startCarousel();
      });
    });
  }

  startCarousel();
  bindEvents();
});

/*#############################################################################################*/
//OCULTAR EL ESLOGAN DEBAJO DEL MENU
function ocultarDiv2() {
  var div2 = document.querySelector(".div2");
  div2.style.display = "none";
}

function mostrarDiv2() {
  var div2 = document.querySelector(".div2");
  div2.style.display = "block";
}
/*#############################################################################################*/
//OBTENER EL TAMAÑO (ANCHO Y LARGO) DE UN ELEMENTO

var divElement = document.querySelector(".vtex-store-header-2-x-headerRowContainer");

if (divElement) {
  // Obtener las dimensiones del div en píxeles
  var rectPx = divElement.getBoundingClientRect();
  console.log("Ancho en píxeles: " + rectPx.width + "px");
  console.log("Alto en píxeles: " + rectPx.height + "px");

  // Obtener las dimensiones del div en porcentaje
  var parentElement = divElement.parentNode;
  var parentWidth = parentElement.offsetWidth;
  var parentHeight = parentElement.offsetHeight;

  var rectPercentage = {
    width: (rectPx.width / parentWidth) * 100,
    height: (rectPx.height / parentHeight) * 100
  };

  console.log("Ancho en porcentaje: " + rectPercentage.width + "%");
  console.log("Alto en porcentaje: " + rectPercentage.height + "%");
} else {
  console.log("No se encontró ningún elemento con la clase 'vtex-store-header-2-x-headerRow'.");
}

/*#############################################################################################*/
//OBTENER EL COLOR DE UN ELEMENTO

var elemento = document.querySelector(".vtex-rich-text-0-x-container");

// Obtiene el color del elemento
var color = getComputedStyle(elemento).backgroundColor;

// Muestra el color en la consola
console.log("El color del elemento es: " + color);


