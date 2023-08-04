import { ClipboardText } from "phosphor-react";

export function EmptyList() {
    return (
        <div className="flex flex-col justify-center items-center gap-1 mt-16">
            <ClipboardText 
                size={64}
                className="text-zinc-700"
            />
            <p
                className="text-zinc-400 font-bold"
            >
                Você ainda não tem tarefas cadastradas
            </p>
            <p
                className="text-zinc-400"
            >
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}