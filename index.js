const Acceuil = document.getElementById("Titre_Acceuil");
const Réalisation = document.getElementById("Titre_Réalisation");
const Galerie = document.getElementById("Titre_Galerie");
const Contact = document.getElementById("Titre_Contact");
const LogoAcceuil = document.getElementById("Logo_Acceuil");
const LogoRéalisation = document.getElementById("Logo_Réalisation");
const LogoGalerie = document.getElementById("Logo_Galerie");
const LogoContact = document.getElementById("Logo_Contact");




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
