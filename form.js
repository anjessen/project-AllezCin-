
//ouvrir popup
let btnPopup = document.getElementById('btnPopup');
let overlay = document.getElementById('overlay');

btnPopup.addEventListener('click',openMoadl);

function openMoadl() {
    overlay.style.display='block';
}

//fermé popup
//Récupérer l'id de l'élément btnClose.
let btnClose = document.getElementById('btnClose');
//récupèrer l'évenement clic et déclenche la fonction closeModal
btnClose.addEventListener('click',closeModal); 

//définit la fonction qui ferme la popup en rendant invisible l'élément overlay;
function closeModal() {
    overlay.style.display='none';
}




// Contrôle du courriel en fin de saisie
/*document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

// Vérification de la longueur du mot de passe saisi
document.getElementById("mdp").addEventListener("input", function (e) {
    var mdp = e.target.value; // Valeur saisie dans le champ mdp
    var longueurMdp = "faible";
    var couleurMsg = "red"; // Longueur faible => couleur rouge
    if (mdp.length >= 8) {
        longueurMdp = "suffisante";
        couleurMsg = "green"; // Longueur suffisante => couleur verte
    } else if (mdp.length >= 4) {
        longueurMdp = "moyenne";
        couleurMsg = "orange"; // Longueur moyenne => couleur orange
    }
    var aideMdpElt = document.getElementById("aideMdp");
    aideMdpElt.textContent = "Longueur : " + longueurMdp; // Texte de l'aide
    aideMdpElt.style.color = couleurMsg; // Couleur du texte de l'aide
});*/