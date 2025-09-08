import { useState } from "react"

type Props = {
    onAdd: (text: string) => void
}

export const AddItem = ({ onAdd }: Props) => {
    const [text, setText] = useState("")

    const handleSubmit = () => {
        if (!text.trim()) return
        onAdd(text.trim())
        setText("")
    }

    return (
        <div>
            <p>Add to the todo list</p>
            <div style={{ display: "flex", gap: "5px" }}>
                <input style={{ padding: "5px", flex: 1 }} onChange={(e) => setText(e.target.value)} type="text" value={text}/>
                <button  style={{border: "1px solid #F6EFEF", padding: "5px", background: "#EE5569", color: "#fff", cursor: "pointer",}} onClick={handleSubmit} type="button">
                    ADD ITEM
                </button>
            </div>
        </div>
    )
}
