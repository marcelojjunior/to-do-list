import { PlusCircle } from "phosphor-react";
import { Item } from "./Item";
import { EmptyList } from "./EmptyList";

const items = [
    {
        id: 1,
        title: "Estudar React",
        done: true,
    },
    {
        id: 2,
        title: "Estudar JavaScript",
        done: false,
    },
    {
        id: 3,
        title: "Estudar Typescript",
        done: true,
    }
]

export function List() {
    return (
        <div className="flex flex-col -mt-14">
            <div className="flex w-full justify-center gap-2">
                <input
                    className="w-5/6 bg-[#202024] shadow-xl rounded-lg p-3 text-gray-100 placeholder:text-gray-500"
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                />
                <button
                    className="w-1/6 bg-green-700 hover:bg-green-800 shadow-xl rounded-lg text-white flex justify-center items-center gap-2"
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </div>
            <div className="mt-10 flex justify-between mb-5">
                <div>
                    <p className="text-green-700 font-bold flex gap-2 text-sm">
                        Tarefas criadas
                        <span className="bg-gray-600 rounded-2xl px-3 text-gray-300">
                            0
                        </span>
                    </p>
                </div>
                <div>
                    <p className="text-green-700 font-bold flex gap-2 text-sm">
                        Concluídas
                        <span className="bg-gray-600 rounded-2xl px-3 text-gray-300">
                            2 de 5
                        </span>
                    </p>
                </div>
            </div>
            <div>
                {items.length === 0 ? <EmptyList /> : (
                    items.map((item) => (
                        <Item key={item.id} {...item} />
                    ))
                )}


            </div>
        </div>
    )
}