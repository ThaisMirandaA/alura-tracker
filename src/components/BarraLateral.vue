<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo Alura Tracker">
      <button class="button" @click="alterarTema">{{ textoBotao }}</button>
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  data() {
    return {
      modoEscuroAtivo: false
    }
  },
  emits: ['aoModoAlterado'],
  computed: {
    textoBotao(): string {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro';
      }
      return 'Ativar modo escuro';
    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aoModoAlterado', this.modoEscuroAtivo);
    }
  }
})
</script>

<style scoped>
header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>