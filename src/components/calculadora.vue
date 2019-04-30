<template>
  <div class="calculadora">
    <div class="display">{{actual || '0'}}</div>
    <div @click="borrar" class="boton">C</div>
    <div @click="signo" class="boton">+/-</div>
    <div @click="porcentaje" class="boton">%</div>
    <div @click="dividir" class="boton operador">÷</div>
    <div @click="agregar('7')" class="boton">7</div>
    <div @click="agregar('8')" class="boton">8</div>
    <div @click="agregar('9')" class="boton">9</div>
    <div @click="multiplicar" class="boton operador">x</div>
    <div @click="agregar('4')" class="boton">4</div>
    <div @click="agregar('5')" class="boton">5</div>
    <div @click="agregar('6')" class="boton">6</div>
    <div @click="menos" class="boton operador">-</div>
    <div @click="agregar('1')" class="boton">1</div>
    <div @click="agregar('2')" class="boton">2</div>
    <div @click="agregar('3')" class="boton">3</div>
    <div @click="sumar" class="boton operador">+</div>
    <div @click="agregar('0')" class="boton zero">0</div>
    <div @click="punto" class="boton">.</div>
    <div @click="igual" class="boton operador">=</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      anterior: null,
      actual: '',
      operador: null,
      operacionClick: false,
    }
  },
  methods: {
    borrar() {
      this.actual = '';
    },
    signo() {
      this.actual = this.actual.charAt(0) === '-' ? 
        this.actual.slice(1) : `-${this.actual}`;
    },
    porcentaje() {
      this.actual = `${parseFloat(this.actual) / 100}`;
    },
    agregar(numero) {
      if (this.operacionClick) {
        this.actual = '';
        this.operacionClick = false;
      }
      this.actual = `${this.actual}${numero}`;
    },
    punto() {
      if (this.actual.indexOf('.') === -1) {
        this.agregar('.');
      }
    },
    defanterior() {
      this.anterior = this.actual;
      this.operacionClick = true;
    },
    dividir() {
      this.operador = (a, b) => a / b;
      this.defanterior();
    },
    multiplicar() {
      this.operador = (a, b) => a * b;
      this.defanterior();
    },
    menos() {
      this.operador = (a, b) => a - b;
      this.defanterior();
    },
    sumar() {
      this.operador = (a, b) => a + b;
      this.defanterior();
    },
    igual() {
        console.log(this.anterior + "/" + this.actual)
      this.actual = `${this.operador(
        parseFloat(this.anterior),
        parseFloat(this.actual)
       
      )}`;
      this.anterior = null;
    }
  }
}
</script>

<style scoped>
.calculadora {
  margin: 0 auto;
  width: 300px;
  font-size: 35px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(50px, auto);
}
.display {
  grid-column: 1 / 5;
  background-color: #333;
  color: rgb(248, 248, 225);
}
.zero {
  grid-column: 1 / 3;
}
.boton {
  background-color: rgb(245, 218, 218);
  border: 1px solid rgb(212, 174, 174);
}
.operador {
  background-color: greenyellow;
  color: black;
}
</style>