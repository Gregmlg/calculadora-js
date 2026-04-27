// ============================================
// CALCULADORA BÁSICA EN JAVASCRIPT
// Proyecto: calculadora-js
// Versión: 1.0.0
// ============================================

// --- OPERACIONES BÁSICAS ---

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: no se puede dividir entre cero";
  }
  return a / b;
}

// --- NUEVA FUNCIÓN: POTENCIA ---

function potencia(base, exponente) {
  return Math.pow(base, exponente);
}

// --- FUNCIÓN PRINCIPAL ---

function calcular(a, operacion, b) {
  switch (operacion) {
    case "+": return sumar(a, b);
    case "-": return restar(a, b);
    case "*": return multiplicar(a, b);
    case "/": return dividir(a, b);
    case "**": return potencia(a, b);
    default: return "Operación no válida";
  }
}

// --- PRUEBAS ---

console.log("=== CALCULADORA v1.0 ===");
console.log("10 + 5 =", calcular(10, "+", 5));   // 15
console.log("10 - 3 =", calcular(10, "-", 3));   // 7
console.log("4 x 6  =", calcular(4,  "*", 6));   // 24
console.log("15 / 3 =", calcular(15, "/", 3));   // 5
console.log("10 / 0 =", calcular(10, "/", 0));   // Error
console.log("2 ^ 8  =", calcular(2, "**", 8));   // 256 Añadido de prueba
