<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="listaVazia">A sua lista ainda está vazia :(</Box>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Formulario from '../components/Formulario.vue';
import Tarefa from '../components/Tarefa.vue';
import ITarefa from '../interfaces/ITarefa'
import Box from '../components/Box.vue';

export default defineComponent({
    name: 'App',
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    components: {
        Formulario,
        Tarefa,
        Box
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) {
            this.tarefas.push(tarefa)
        },
    },
    computed: {
        listaVazia(): boolean {
            return this.tarefas.length === 0;
        }
    }
});
</script>