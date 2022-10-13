import { useState } from "react";
import "./Room.css"

function Room() {

    const [lightOn, setLightOn] = useState(true)
    return (
        <div className={`room ${lightOn ? "lit" : "dark"}`}> 
            <button onClick={() => setLightOn(!lightOn)}>Light Switch</button>

            {lightOn === true ? <p className="lit">The room is lit</p> : <p className="dark">The room is dark</p>}
            
        </div>
     );
}

export default Room;
