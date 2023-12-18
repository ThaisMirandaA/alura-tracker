import { createRouter, RouteRecordRaw, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue';
import Projetos from '../views/Projetos.vue'
import FormularioVue from "@/views/Projetos/Formulario.vue";
import ListaVue from "@/views/Projetos/Lista.vue";

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: ListaVue
            },
            {
                path: 'novo',
                name: 'Novo projeto',
                component: FormularioVue
            },
            {
                path: ':id',
                name: 'Editar projeto',
                component: FormularioVue,
                props: true
            }
        ]
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})
export default roteador;