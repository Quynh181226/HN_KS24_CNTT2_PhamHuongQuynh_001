import {useState} from "react";

export const AddItem=()=>{
    const [add, setAdd]=useState(false)
    const handleChange=(e)=>{
        e.target.value
    }
    const submitItem=(id: number)=>{

    }
    return(
        <div>
            <p>Add to the todo list</p>
            <div style={{display: "flex", gap: "5px"}}>
                <input type="text" style={{padding: "5px"}}/>
                <button onClick={submitItem} type="submit" style={{border: "1px solid #F6EFEF", padding: "5px", background: "#EE5569"}}>ADD ITEM</button>
            </div>
        </div>
    )
}