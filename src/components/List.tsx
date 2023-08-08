import { PlusCircle } from "phosphor-react";
import { Item } from "./Item";
import { EmptyList } from "./EmptyList";
import { ChangeEvent, FormEvent, useState } from "react";

interface ItemContent {
    id: number;
    content: string;
    done: boolean;
}

export function List() {
    const [items, setItems] = useState<ItemContent[]>([]);
    const [newItemContent, setNewItemContent] = useState('');

    function handleNewItemChange(event: ChangeEvent<HTMLInputElement>) {
        setNewItemContent(event.target.value);
    }

    function handleCreateNewItem(event: FormEvent) {
        event.preventDefault()

        const newItem: ItemContent = {
            id: items.length + 1,
            content: newItemContent,
            done: false
        };

        setItems([...items, newItem]);
        setNewItemContent('');
    }

    function deleteItem(itemToDelete: number) {
        const itemsWhiteOutDeleteOne = items.filter(item => {
            return item.id !== itemToDelete
        })

        setItems(itemsWhiteOutDeleteOne);
    }

    function handleToggle(id: number) {
        const updatedItems = items.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item
        );
        setItems(updatedItems);
    }



    return (
        <div className="flex flex-col -mt-14">
            <form
                className="flex w-full justify-center gap-2"
                onSubmit={handleCreateNewItem}
            >
                <input
                    className="w-5/6 bg-[#202024] shadow-xl rounded-lg p-3 text-gray-100 placeholder:text-gray-500"
                    type="text"
                    placeholder="Adicione uma nova tarefa"
                    value={newItemContent}
                    onChange={handleNewItemChange}
                />
                <button
                    type="submit"
                    className="w-1/6 bg-green-700 hover:bg-green-800 shadow-xl rounded-lg text-white flex justify-center items-center gap-2"
                >
                    Criar
                    <PlusCircle size={20} />
                </button>
            </form>

            <div className="mt-10 flex justify-between mb-5">
                <div>
                    <p className="text-green-700 font-bold flex gap-2 text-sm">
                        Tarefas criadas
                        <span className="bg-gray-600 rounded-2xl px-3 text-gray-300">
                            {items.length}
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
                        <Item
                            key={item.id}
                            id={item.id}
                            content={item.content}
                            done={item.done}
                            onToggleItem={handleToggle}
                            onDeleteItem={deleteItem}
                        />
                    ))
                )}


            </div>
        </div>
    )
}