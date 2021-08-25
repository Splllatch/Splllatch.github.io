const boutton = document.getElementById("bouton");
const sommaire = document.querySelector(".sommaire");
const logoTop = document.getElementById("logo-top");
const Logo = document.getElementById("logo");
const enTete = document.querySelector(".en_tete");
const TL1 = new TimelineMax({paused: true});
const TL2 = new TimelineMax({paused: true});
const loader = document.querySelector('.loader');
const somm = document.querySelector('.somm');
const somm1 = document.querySelector('.somm1');
const parallax = document.querySelector('.parallax');
const Days = document.getElementById("days");
const DaysTag = document.getElementById("jours");
const Hours = document.getElementById("hours");
const HoursTag = document.getElementById("heures");
const Minutes = document.getElementById("minutes");
const MinutesTag = document.getElementById("min");
const Secondes = document.getElementById("secondes");
const SecondesTag = document.getElementById("sec");
let som = true;


/*TL1
.from(sommaire,0.5,{opacity:0, x:-100},)*/

function sommaire_cache ()
{
  sommaire.classList.remove('after')
  somm.classList.remove('after')
  somm1.classList.remove('after')
  som = true
}

function sommaire_visible()
{
  
  sommaire.classList.add('after')
  somm.classList.add('after')
  somm1.classList.add('after')
  som = false
}

function gros_logo()
{
  enTete.classList.remove('scroll')
  Logo.style.width='200px' 
}

function petit_logo()
{
  enTete.classList.add('scroll')
  Logo.style.width='100px'
}


window.addEventListener('load', () => {
  loader.classList.add('fondu_out')
})

  
boutton.onclick = () => {
  if(som == true)
  {    
    sommaire_visible()
    petit_logo();
  }
  else 
  {
    sommaire_cache()
      if(window.scrollY > 10){
        petit_logo()
      }
      else{
        gros_logo() }

    som = true }
  }

  sommaire.onclick = () => {  
    sommaire_cache()
  }

  window.addEventListener('scroll', () => {
  if(window.scrollY > 5){
    petit_logo()
  }
  else{
    gros_logo()
  }
  })

  window.addEventListener('scroll', () => {
    parallax.style.backgroundPositionY = -window.scrollY / 3 + "px"
    sommaire_cache();
    })


var launch = new Date(2022,07,17,14,00,00);

setData();

function setData()
{
    var now = new Date()
    var seconde = (launch.getTime() - now.getTime())/1000
    var jour = Math.floor(seconde/86400)
    Days.innerHTML = jour 
    DaysTag.innerHTML = ' jour' + (jour > 1 ? 's' : '')
    seconde -= jour*86400
    var heure = Math.floor(seconde/3600)
    Hours.innerHTML = heure 
    HoursTag.innerHTML = ' heure' + (heure > 1 ? 's' : '')
    seconde -= heure*3600
    var minute = Math.floor(seconde/60)
    Minutes.innerHTML = minute 
    MinutesTag.innerHTML = ' minute' + (minute > 1 ? 's' : '')
    seconde -= minute*60
    seconde = Math.floor(seconde)
    Secondes.innerHTML = seconde 
    SecondesTag.innerHTML = ' seconde' + (seconde > 1 ? 's' : '')
    setTimeout(setData,1000);
    
}


