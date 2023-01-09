import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useNavigate } from "react-router-dom";


const Swagger1 = () => {
    const navigate = useNavigate();

    return (
        <div >

            <SwaggerUI url="sydor.yml" />
            <button onClick={() => navigate(-1)}>Go Back</button>


        </div>
    );
}

// export const Swagger2 = () => {

//     return (
//         <div id="App" className="App">

//             <SwaggerUI url="syndor1.yml" />


//         </div>
//     );
// }
export default Swagger1;
