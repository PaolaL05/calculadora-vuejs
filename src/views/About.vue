<template>
  <div class="about">
    <h1>This is an about page</h1>
    <calculadora/> 
  </div>
</template>

<script>
// @ is an alias to /src
import calculadora from '@/components/calculadora.vue'

export default {
  name: 'Calculadora',
  components: {
    calculadora
  }
}
</script>