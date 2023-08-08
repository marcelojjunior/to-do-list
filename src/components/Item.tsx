import { Trash } from "phosphor-react";
import { useState } from "react";

interface ItemProps {
    id: number;
    content: string;
    done: boolean;
    onDeleteItem: (id: number) => void;
    onToggleItem: (id: number) => void;
}

export function Item({ id, content, done, onDeleteItem, onToggleItem }: ItemProps) {
    const [openModalDelete, setOpenModalDelete] = useState(false);

    function handleDeleteComment(){
        onDeleteItem(id);
        setOpenModalDelete(false);
    }

    return (
        <>
            <div className="flex gap-2 justify-between bg-zinc-700 rounded-lg p-3 mb-3">
                <div className="flex gap-2">
                    <label className={`${done ? 'line-through text-zinc-400' : 'text-white'} custom-checkbox text-base`}>
                        {content}
                        <input
                            type="checkbox"
                            checked={done}
                            data-id={id}
                            onChange={() => onToggleItem(id)}
                        />
                        <span className="checkmark"></span>
                    </label>
                </div>
                <button
                    onClick={() => setOpenModalDelete(true)}
                    className="text-white hover:text-red-600"
                >
                    <Trash size={16} />
                </button>
            </div>
            <div
                className={`${openModalDelete ? 'block' : 'hidden'} bg-gray-800 bg-opacity-50 backdrop-blur z-40 fixed w-full left-0 top-0 h-screen flex justify-center items-center`}
            >
                <div className="bg-zinc-700 w-max rounded-lg p-6 flex flex-col gap-6 justify-center items-center">
                    <h1 className="font-bold text-2xl text-white">
                        Excluir Item
                    </h1>
                    <p className="text-white text-base">
                        Você tem certeza que deseja excluir esse item?
                    </p>
                    <div className="flex gap-4">
                        <button
                            onClick={() => setOpenModalDelete(false)}
                            className="text-white hover:opacity-90 rounded-lg"
                        >
                            Cancelar
                        </button>
                        <button
                            onClick={handleDeleteComment}
                            className="text-red-600 bg-zinc-800 py-2 px-6 rounded-lg hover:opacity-90"
                        >
                            Sim, excluir
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}