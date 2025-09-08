import { Checkbox } from "antd"
import type {Todo} from "../types/type.ts";

type Props = {
    todo: Todo
    onToggle: (id: number) => void
    onDelete: (id: number) => void
}

export const Items = ({ todo, onToggle, onDelete }: Props) => {
    return (
        <div style={{background: "rgba(241,102,116,0.49)", width: "75%", alignItems: "center", display: "flex", justifyContent: "space-between", margin: "5px 0", padding: "5px 10px", borderRadius: "6px",}}>
            <div style={{textDecoration: todo.completed ? "line-through" : "none", opacity: todo.completed ? 0.6 : 1,}}>
                {todo.content}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Checkbox checked={todo.completed} onChange={() => onToggle(todo.id)}/>
                <svg onClick={() => onDelete(todo.id)} style={{ cursor: "pointer" }} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B87E9F"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360Z" /></svg>
            </div>
        </div>
    )
}
