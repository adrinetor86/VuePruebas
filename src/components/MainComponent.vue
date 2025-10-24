<template>

  <h1>Main View</h1>

  <h1>Nombre: {{nombre}}</h1>
  <h2>Edad: {{edad}}</h2>
  <h3>Palabras: {{arrayPalabras}}</h3>
  <h3>Palabra indice 2: {{arrayPalabras[2]}}</h3>

</template>

<script>
export default{
  name:"MainComponent",
  data(){
    return{
      nombre:"Adrian",
      edad:21,
      arrayPalabras:["Leon","Mesa","Sistema"]
    }
  }
}

</script>

<style>

</style>