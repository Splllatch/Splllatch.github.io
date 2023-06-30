const Acceuil = document.getElementById("Titre_Acceuil");
const Réalisation = document.getElementById("Titre_Réalisation");
const Galerie = document.getElementById("Titre_Galerie");
const Contact = document.getElementById("Titre_Contact");
const LogoAcceuil = document.getElementById("Logo_Acceuil");
const LogoRéalisation = document.getElementById("Logo_Réalisation");
const LogoGalerie = document.getElementById("Logo_Galerie");
const LogoContact = document.getElementById("Logo_Contact");
const parallax1 = document.querySelector('.parallax1');
const parallax2 = document.querySelector('.parallax2');
const parallax3 = document.querySelector('.parallax3')




Acceuil.onclick = () => {
    LogoAcceuil.classList.add('On') 
    LogoRéalisation.classList.remove('On')
    LogoGalerie.classList.remove('On')
    LogoContact.classList.remove('On') 
    Acceuil.classList.add('On')
    Réalisation.classList.remove('On')
    Galerie.classList.remove('On')
    Contact.classList.remove('On')
}

Réalisation.onclick = () => {
    LogoAcceuil.classList.remove('On') 
    LogoRéalisation.classList.add('On')
    LogoGalerie.classList.remove('On')
    LogoContact.classList.remove('On')  
    Acceuil.classList.remove('On')
    Réalisation.classList.add('On') 
    Galerie.classList.remove('On')
    Contact.classList.remove('On')
}

Galerie.onclick = () => {
    LogoAcceuil.classList.remove('On') 
    LogoRéalisation.classList.remove('On')
    LogoGalerie.classList.add('On')
    LogoContact.classList.remove('On')   
    Acceuil.classList.remove('On')
    Réalisation.classList.remove('On') 
    Galerie.classList.add('On')
    Contact.classList.remove('On')
}

Contact.onclick = () => {
    LogoAcceuil.classList.remove('On') 
    LogoRéalisation.classList.remove('On')
    LogoGalerie.classList.remove('On')
    LogoContact.classList.add('On')   
    Acceuil.classList.remove('On')
    Réalisation.classList.remove('On') 
    Galerie.classList.remove('On')
    Contact.classList.add('On')
}

const ratio = .9	
var options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9
  }

  const AcceuilIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            LogoAcceuil.classList.add('On') 
            LogoRéalisation.classList.remove('On')
            LogoGalerie.classList.remove('On')
            LogoContact.classList.remove('On') 
            Acceuil.classList.add('On')
            Réalisation.classList.remove('On')
            Galerie.classList.remove('On')
            Contact.classList.remove('On')
        }})  
}  



const RéalisationIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            LogoAcceuil.classList.remove('On') 
            LogoRéalisation.classList.add('On')
            LogoGalerie.classList.remove('On')
            LogoContact.classList.remove('On')   
            Acceuil.classList.remove('On')
            Réalisation.classList.add('On') 
            Galerie.classList.remove('On')
            Contact.classList.remove('On')
        }})  
}

const GalerieIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            LogoAcceuil.classList.remove('On') 
            LogoRéalisation.classList.remove('On')
            LogoGalerie.classList.add('On')
            LogoContact.classList.remove('On')   
            Acceuil.classList.remove('On')
            Réalisation.classList.remove('On') 
            Galerie.classList.add('On')
            Contact.classList.remove('On')
        }})  
}

const ContactIntersect = function (entries, observer) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
            LogoAcceuil.classList.remove('On') 
            LogoRéalisation.classList.remove('On')
            LogoGalerie.classList.remove('On')
            LogoContact.classList.add('On')   
            Acceuil.classList.remove('On')
            Réalisation.classList.remove('On') 
            Galerie.classList.remove('On')
            Contact.classList.add('On')
        }})  
}

var AcceuilObserver = new IntersectionObserver(AcceuilIntersect, options);
var RéalisationObserver = new IntersectionObserver(RéalisationIntersect, options);
var GalerieObserver = new IntersectionObserver(GalerieIntersect, options);
var ContactObserver = new IntersectionObserver(ContactIntersect, options);

AcceuilObserver.observe(document.querySelector('.Acceuil'))
RéalisationObserver.observe(document.querySelector('.Réalisation'))
GalerieObserver.observe(document.querySelector('.Ligne_Photo'))
ContactObserver.observe(document.querySelector('.Contact'))


window.addEventListener('scroll', () => {
    parallax1.style.backgroundPositionY = -window.scrollY / 6 + "px" 
    })

window.addEventListener('scroll', () => {
    parallax2.style.backgroundPositionY = -window.scrollY / 6 + "px"   
    })    

window.addEventListener('scroll', () => {
    parallax3.style.backgroundPositionY = -window.scrollY / 6 + "px"   
    })      