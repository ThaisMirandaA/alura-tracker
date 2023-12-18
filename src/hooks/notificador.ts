import { TipoNotificacao } from "@/interfaces/INotificacao"
import { store } from "@/store";
import { NOTIFICA } from "@/store/tipos-mutacoes";

type Notificador = {
    notificar: (tipo: TipoNotificacao, titulo: string, texto: string) => void
}

export default (): Notificador => {
    const notificar = (tipo: TipoNotificacao, titulo: string, texto: string): void => {
        store.commit(NOTIFICA, {
            titulo,
            texto,
            tipo
        })
    }

    return {
        notificar
    }

}