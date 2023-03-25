export default {
    btn: document.querySelector("#suma"),
    click() {
        this.btn.addEventListener("click", (event) =>{
            this.calcular();
        })
    },
    calcular() {
        let resultado = 0;
        for (let i =1; i<11; i++) {
            resultado += i;
        }
        alert(`La suma de los numeros de 1 y 10 es ${resultado}`);
    }
}