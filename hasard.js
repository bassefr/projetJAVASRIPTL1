let nbrmatch_gagné = 0;
const totalMatch = 10;
const Commencer = () => {
  for (let i = 0; i < totalMatch; i++) {
    let nbrUser = prompt(`Saisir un nombre compris entre 1 et 6 (nbre d'essai ${i + 1}/${totalMatch})`);
    let nombre = parseInt(nbrUser);
    
    if (isNaN(nombre) || nombre < 1 || nombre > 6) {
      alert("Veuillez saisir un nombre entier entre 1 et 6!");
      i--; 
      continue;
    }
    let nbreAleaMachine = (Math.floor(Math.random() * 6) + 1);
    
    if (nombre == nbreAleaMachine) {
      alert("C'était le bon nombre à deviner");
      nbrmatch_gagné++;
    }else {
      alert(`Le nombre saisi par la machine était ${nbreAleaMachine}`);
    }
  }
  let percentageScore = (nbrmatch_gagné * 100) / totalMatch;
  let résultat = percentageScore >= 40 ? "Super! Vous avez gagné le jeu!" : "Désolé, vous avez perdu!";
  document.body.innerHTML = `<p>${résultat} - Score : ${Math.round(percentageScore)}%</p>`;
  document.body.style.backgroundColor = percentageScore >= 40 ? "green" : "red";
};



