<template>
    <button class="button" @click="foiClicado" :disabled="statusCronometro">
        <span class="icon">
            <i :class="classeComando"></i>
        </span>
        <span>{{ comando }}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'BotaoTemporizador',
    emits: ['foiClicado'],
    props: {
        statusCronometro: { type: Boolean },
        classeComando: { type: String },
        comando: { type: String, required: true }
    },
    methods: {
        foiClicado(): void {
            this.$emit('foiClicado');
        }
    }
})
</script>