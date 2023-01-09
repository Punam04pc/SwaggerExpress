import React from "react";
import "swagger-ui-react/swagger-ui.css";
import "./styles.css";
import Swagger1 from "./Swagger";
import Swagger2 from "./Swagger2";
import { Route, BrowserRouter, Routes} from "react-router-dom";
import Routing from "./Routing";
function App() {
    return (
        <React.Fragment>  <BrowserRouter>
            <div className="App" style={{
                    backgroundColor: 'salmon',
                    textAlign: "center"   
                }}> <h1> API Documentation</h1></div>
            <Routes>
                <Route path="/" element={< Routing />} />
                <Route path="/swagger" element={<Swagger1 />} />
                <Route path="/swagger2" element={<Swagger2 />} />
            </Routes>
        </BrowserRouter></React.Fragment>
    )
}
export default App;