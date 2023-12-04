<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <BotaoTemporizador 
            :classeComando="'fas fa-play'" 
            :comando="'play'" 
            @foiClicado="iniciar"
            :statusCronometro="cronometroRodando" 
        />
        <BotaoTemporizador 
            :classeComando="'fas fa-stop'"
            :comando="'stop'"
            @foiClicado="finalizar"
            :statusCronometro="!cronometroRodando"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cronometro from './Cronometro.vue';
import BotaoTemporizador from './BotaoTemporizador.vue';

export default defineComponent({
    name: 'TemporizadorComponent',
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    methods: {
        iniciar(event: MouseEvent) {
            this.cronometro = setInterval(() => {
                this.cronometroRodando = true;
                this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
    components: { Cronometro, BotaoTemporizador },
    emits: ['aoTemporizadorFinalizado']
})
</script>