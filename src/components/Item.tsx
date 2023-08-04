import { Trash } from "phosphor-react";

interface ItemProps {
    id: number;
    title: string;
    done: boolean;
}

export function Item({ id, title, done }: ItemProps) {
    return (
        <div className="flex gap-2 justify-between bg-zinc-700 rounded-lg p-3 mb-3">
            <div className="flex gap-2">
                <label className="custom-checkbox text-base text-white">
                    {title}
                    <input type="checkbox"  checked={done} data-id={id}/>
                    <span className="checkmark"></span>
                </label>
            </div>
            <button
                className="text-white hover:text-red-600"
            >
                <Trash size={16} />
            </button>
        </div>
    )
}