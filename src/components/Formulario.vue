<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar?" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <Temporizador @aoTemporizadorFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
import { useStore } from 'vuex';
import { key, store } from '@/store';
import { computed } from '@vue/reactivity';
import { TipoNotificacao } from '@/interfaces/INotificacao';
import useNotificador from '../hooks/notificador'

export default defineComponent({
    name: "FormularioComponent",
    components: { Temporizador },
    emits: ['aoSalvarTarefa'],
    data() {
        return {
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            const projeto = this.projetos.find(proj => proj.id === this.idProjeto)
            if (!projeto) {
                this.notificar(TipoNotificacao.FALHA, 'Erro ao salvar tarefa', 'A tarefa não pode ser salva sem o projeto')
            } else {
                this.$emit('aoSalvarTarefa', {
                    duracaoEmSegundos: tempoDecorrido,
                    descricao: this.descricao,
                    projeto: this.projetos.find(proj => proj.id === this.idProjeto)
                })
            }
            this.descricao = '';
        }
    },
    setup() {
        const store = useStore(key);
        const { notificar } = useNotificador();
        return {
            projetos: computed(() => store.state.projetos),
            notificar
        }
    }
})
</script>

<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario);
}
</style>