 function premier() {
    const nbr = parseInt(document.getElementById("primeInput").value);
    if (isNaN(nbr)) {
      alert(`Donnée invalide`);
      return;
  }
      if (nbr < 2) {
        alert (`Le nombre ${nbr} ne fait pas partie des nombres premier`);
      } else if (nbr === 2 || nbr === 3 || nbr === 5 || nbr === 7) {
        document.getElementById("primeResult").innerHTML = `Le nombre ${nbr} est premier`;
      } else if (nbr % 2 === 0 || nbr % 3 === 0 || nbr % 5 === 0 || nbr % 7 === 0) {
        document.getElementById("primeResult").innerHTML = `Le nombre ${nbr} n'est pas premier`;
      } else if (nbr % 2!== 0 || nbr % 3!== 0) {
        document.getElementById("primeResult").innerHTML = `Le nombre ${nbr} est premier`;
      } else {
        document.getElementById("primeResult").innerHTML = `Le nombre ${nbr} n'est pas premier`;
      }
    } 