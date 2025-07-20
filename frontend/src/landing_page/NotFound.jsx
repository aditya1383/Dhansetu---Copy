import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
         <div className="container p-5 mb-5">
            <div className="row text-center">

                 <h1 className="mt-5" style={{color:"red"}}>404 Not Found</h1>

                 <p>Sorry, the page you are looking for does not exist.</p>

                 <Link to="/"><button className="p-2 btn btn-primary fs-5" style={{width: "20%", margin:"0 auto", backgroundColor:"whitesmoke", color:"blue"}}>Go Home</button></Link>
            </div>
        </div>
    )
}

export default NotFound;