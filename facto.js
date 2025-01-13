function calculateFactorial() {
    const num = parseInt(document.getElementById('factorialInput').value);

    if (isNaN(num) || num < 0) {
        alert("Veuillez entrer un nombre entier positif.");
        return;
    }
    const result = factorial(num);
    document.getElementById('factorialResult').innerHTML = ` ${num}!= ${result}  (La factorielle de ${num} est ${result}).`;
}
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = n; i > 1; i--) {
        result *= i;
    }
    return result;
} 