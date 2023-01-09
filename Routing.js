import React from "react";
import "swagger-ui-react/swagger-ui.css";
import "./styles.css";
import { NavLink } from "react-router-dom";
function Routing() {
    return (
        <React.Fragment>
            <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/swagger">CLPL_SA</NavLink>

                        </li>
                        <li>
                            <NavLink to="/swagger2">LSQ_SA</NavLink>

                        </li>
                        <li>
                            <NavLink to="/swagger2">ECOM</NavLink>

                        </li>
                    </ul>
                </nav>
            </div>

        </React.Fragment>
    )
}
export default Routing;