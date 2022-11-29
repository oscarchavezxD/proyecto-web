const irDeCompras = [];
const recolectar = prompt("Eligue algunas frutas:");
irDeCompras.push(recolectar)
console.log(irDeCompras)
while(confirm('¿Deseas otra fruta?')){
    const recolectar = prompt("Eligue algunas frutas:");
    irDeCompras.push(recolectar)
}