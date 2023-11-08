// Vérifier si le mode sombre est déjà activé
if (localStorage.getItem('modeSombre') === 'activé') {
    document.body.classList.add('dark');
}

// Fonction pour activer le mode sombre
function activerModeSombre() {
    document.body.classList.add('dark');
    localStorage.setItem('modeSombre', 'activé');
}

// Fonction pour désactiver le mode sombre
function desactiverModeSombre() {
    document.body.classList.remove('dark');
    localStorage.setItem('modeSombre', 'désactivé');
}

// Vérifier si le mode sombre est activé dans le local storage
if (localStorage.getItem('modeSombre') === 'activé') {
    // Mettre à jour les éléments en mode sombre
    document.querySelector("#moon-sun-img").classList.remove('sun');
    document.querySelector("#moon-sun-img").classList.add('moon');
    document.querySelector('.moon-sun').classList.remove('light');
    document.querySelector('.sun-component').style.opacity = '0';
    document.querySelector('.moon-component').style.opacity = '1';
}

function modeSwitcher() {

    document.querySelector('.moon-sun').classList.toggle('light');
    
    const moon_sun_img= document.querySelector("#moon-sun-img");
  
    const sunComponent = document.querySelector('.sun-component');
    const moonComponent = document.querySelector('.moon-component');
    moon_sun_img.classList.toggle('sun');
    moon_sun_img.classList.toggle('moon');
    if (sunComponent.style.opacity === '1') {
        sunComponent.style.opacity = '0';
        moonComponent.style.opacity = '1';
       
    } else {
        sunComponent.style.opacity = '1';
        moonComponent.style.opacity = '0';
    }

    document.body.classList.toggle('dark');
    const modeSombre = localStorage.getItem('modeSombre');
    if (modeSombre === 'activé') {
        localStorage.setItem('modeSombre', 'désactivé');
    } else {
        localStorage.setItem('modeSombre', 'activé');
    }
}



// Fonction pour assombrir une couleur
function darkenColor(color, percent) {
    var num = parseInt(color.slice(1), 16);
    var amt = Math.round(2.55 * percent);
    var r = (num >> 16) - amt;
    var g = (num >> 8 & 0x00FF) - amt;
    var b = (num & 0x0000FF) - amt;

    return "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
}

// Fonction pour mettre à jour la couleur du thème
function updateThemeColor(selectedColor) {
    var darkerColor = darkenColor(selectedColor, 20);
    document.documentElement.style.setProperty('--skin--color1', selectedColor);
    document.documentElement.style.setProperty('--skin--color2', darkerColor);
    document.getElementById('stylecolor').style.color = selectedColor;
}

// Vérifier si le mode sombre est activé
var modeSombre = localStorage.getItem('modeSombre') === 'activé';

// Fonction pour gérer le changement de mode
function toggleMode() {
    modeSombre = !modeSombre;
    localStorage.setItem('modeSombre', modeSombre ? 'activé' : 'désactivé');

    if (modeSombre) {
        // Mettez ici les styles pour le mode sombre
        document.body.classList.add('dark-mode');
        document.getElementById('stylecolor').style.color = '#ffffff';
    } else {
        // Mettez ici les styles pour le mode clair
        document.body.classList.remove('dark-mode');
        updateThemeColor(localStorage.getItem('lastSelectedColor'));
    }
}


document.addEventListener('DOMContentLoaded', function() {
    // Récupérez les couleurs du root
    const color1 = getComputedStyle(document.documentElement).getPropertyValue('--skin--color1').trim();
    const color2 = getComputedStyle(document.documentElement).getPropertyValue('--skin--color2').trim();
  
    // Mettez les couleurs dans le stockage local
    localStorage.setItem('color1', color1);
    localStorage.setItem('color2', color2);
  
    // Récupérez l'élément input de couleur
    const styleColorInput = document.getElementById('stylecolor');
  
 
    styleColorInput.value = color1;

    styleColorInput.addEventListener('input', function() {
      const newColor = this.value;
      const currentColor1 = localStorage.getItem('color1');
      const currentColor2 = localStorage.getItem('color2');
  
      if (newColor !== currentColor1) {

        document.documentElement.style.setProperty('--skin--color1', newColor);
  
        // Mettez à jour color2 en conséquence
        const colorDiff = colorDiffBrightness(currentColor1, newColor);
        document.documentElement.style.setProperty('--skin--color2', colorDiff);
        localStorage.setItem('color1', newColor);
        localStorage.setItem('color2', colorDiff);
      } else {
        const lighterColor = lightenColor(newColor, 20);
        document.documentElement.style.setProperty('--skin--color2', lighterColor);
        localStorage.setItem('color2', lighterColor);
      }
    });


function colorDiffBrightness(color1, color2) {
    const tcColor1 = tinycolor(color1);
    const tcColor2 = tinycolor(color2);

    const diffColor = tcColor1.darken().toString();

    return diffColor;
}


function lightenColor(color, percent) {
    const tcColor = tinycolor(color);

    // Calculer une couleur plus claire
    const lighterColor = tcColor.lighten(percent).toString();

    return lighterColor;
}

  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link');
  
    navLinks.forEach((link, index) => {
      link.addEventListener('click', function(event) {
      

        navLinks.forEach(link => link.classList.remove('active'));
  
        // Ajoutez la classe active au lien actuellement cliqué
        this.classList.add('active');
  
        // Mettez à jour la position de .menu-indicator en fonction de l'index
        const menuIndicator = document.querySelector('.menu-indicator');
        const topPosition = 9 + index * 60; // Calcul de la nouvelle position en pixels
  
        if (menuIndicator) {
          menuIndicator.style.top = `${topPosition}px`;
        }
      });
    });
  
    this.document.querySelector('a').click();

  });
  

  
const sidebar = document.querySelector('.sidebar');
const navtoggler = document.querySelector('.navtoggle');


navtoggler.addEventListener('click',()=>{
    sidebar.classList.toggle("close");
})


//prendre tous les liens et les sections

















/* typing pour mon profil */    
const profilElement = document.getElementById('profil');
const list = ['Développeur web','Designer UI/UX', 'Adepte de la programmation', ''];

let index = 0;
let subIndex = 0;
let typingInterval;

function type() {
    const currentText = list[index];
    const currentSubText = currentText.substring(0, subIndex + 1);
    profilElement.innerText = currentSubText;

    subIndex++;

    if (subIndex > currentText.length) {
        clearInterval(typingInterval);
        subIndex = 0;

        setTimeout(() => {
            index++;
            if (index >= list.length) index = 0;

            typingInterval = setInterval(type, 100);
        }, 1000);
    }
}

typingInterval = setInterval(type, 100);





$(document).ready(function() {
    const cards = document.querySelectorAll(".card3d");
    
    cards.forEach(card => {
        const boundingBox = card.getBoundingClientRect();
        const centerX = boundingBox.left + boundingBox.width / 4;
        const centerY = boundingBox.top + boundingBox.height / 4;

        card.addEventListener("mousemove", e => {
            const { pageX, pageY } = e;
            const [diffX, diffY] = [centerX - pageX, centerY - pageY];
            card.style.transform = `translateZ(-40px) rotateX(${diffY / 15}deg) rotateY(${-diffX / 15}deg)`;
        });
    });
});












/* timeline card defilement */
   var viewportWidth, divWidth, tb;
	$(function() {
		
		viewport = $('#container').innerWidth();
		tb = $('#thumbs');
		divWidth = tb.outerWidth();
    
		$('#container').mousemove(function(e)
		{
      tb.css({left: ((viewport - divWidth)*((e.pageX / viewport).toFixed(3))).toFixed(1) +"px" });
 		});
    
    $('.history-block').on('click', function(){
      $('.history-block').css('width', '300px');
      $('.history-block').find('.title').css('width', '260px');
       $('.history-block .timeline').hide(300);
        $(this).css('width', '600px');
        $(this).find('.title').css('width', '500px');
   
      $('#container').mousemove(function(e)
        {
          tb.css({left: ((viewport - divWidth-300)*((e.pageX / viewport).toFixed(3))).toFixed(1) + 300 + "px" });
          });
    });
    
    $('.timeline ul li').on('click', function(){
        $(this).parent().blink();
    });
});
 