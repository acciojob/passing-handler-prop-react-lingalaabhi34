
import { useState } from "react";

const Selection=({key,applyColor})=>{


    const [bgcolor,setcolor] = useState("");
    const changecolor=()=>{
        applyColor((background)=>{
            setcolor(background)
        })
    }

    return(
    <div className="card" key={key} onClick={changecolor} style={{background:bgcolor.background, height: 200,
        width: 200,
        border: "2px solid gray"}} >
      <h1>Selection</h1>
    </div>)
}
export default Selection;