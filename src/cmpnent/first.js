import   {useState} from "react";

import theContext from "./contex";
import Second from "./second";


const First =()=>{
      const[state,setState] = useState("");
      const[click,setClick] =useState(" ");
    return(
<div>

    <h2>First</h2>
    <input type="text" placeholder="enter some text"  
    onChange={(e)=>{
        setState(e.target.value)
    }}
    />
    <button
    onClick={()=>{
        setClick(state)
    }}
    >click</button>


    <br></br>
    <hr></hr>
    <theContext.Provider value={click}>
    <Second />

    </theContext.Provider>
  
</div>
    );
}


export default First;
