import React from 'react'
import {Link} from "react-router-dom";

const Landing = () =>{
    return(
        <div className="wrapper landing">>
            <div className="tex">
                <h1>Bienvenidos</h1>
                <h2>A la biblioteca Amazanon-Charles&Associates</h2>
            </div>

            <div className="butt">
                <Link to="/signup"><button type="button" className="btn">Signup</button></Link>
                <Link to="/login"><button type="button" className="btn">Login</button></Link>
            </div>
        </div>
    )
}
export default  Landing