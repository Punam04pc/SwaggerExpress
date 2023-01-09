import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import { useNavigate } from "react-router-dom";

const Swagger2 = () => {
    const navigate = useNavigate();

    return (
        <div >

            <SwaggerUI url="syndor1.yml" />
            <button onClick={() => navigate(-1)}>Go Back</button>


        </div>
    );
}
export default Swagger2;
