import {Items} from "./Items.tsx";
import {AddItem} from "./AddItem.tsx";

export const Main=()=>{
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",  background: "#EF5366", margin: "0 5.5rem"}}>
           {/*<div>*/}
               <div style={{}}>
                   <h1>Todo List</h1>
                   <p style={{borderBottom: "1px solid #EE5B6D", }}>Get things done, one item at a time</p>
               </div>
               <Items></Items>
            {/*<div  style={{display: "flex", justifyContent: "flex-end"}}>*/}
                <p>Move done Items at the end? <span style={{padding: 0}}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-240q-100 0-170-70T40-480q0-100 70-170t170-70h400q100 0 170 70t70 170q0 100-70 170t-170 70H280Zm0-80h400q66 0 113-47t47-113q0-66-47-113t-113-47H280q-66 0-113 47t-47 113q0 66 47 113t113 47Zm0-40q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm200-120Z"/></svg></span></p>
            {/*</div>*/}
            <AddItem/>
           {/*</div>*/}
        </div>
    )
}