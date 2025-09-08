import { Checkbox } from 'antd';
import {useState} from "react";
// import {useState} from "react";
// import type from "../types/type.ts"
type thu={
    id: number
}
export const Items=()=>{
    // const CheckboxProps= (e) =>{
    //     e.target.checked
    // }
    const [dele, setDele]=useState(false)

    // type todoProps={
    //     id: string
    // }
    const deleteItem=(id: number)=>{
        if(id!==0){
            return ""
        }
        setDele(prev)=>prev.filter((e)=>e.id===thu)
    }
    // const [check, setCheck]=useState("false")
    // const handleDelete=()=>{
    //
    // }
    return(
        <div style={{background: "rgba(241,102,116,0.49)", width: "75%", alignItems: "center", display: "flex", justifyContent: "space-between"}}>
            <div>
                <input type="text"/>
            </div>
            <div>
                {/*onChange={CheckboxProps}*/}
                <Checkbox ></Checkbox>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#B87E9F"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
            </div>
        </div>
    )
}