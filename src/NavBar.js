// // import { Link, NavLink } from 'react-router-dom'
// // import React from 'react';
// // function NavBar() {
// //     return (<div>
// //         {/* <nav>
// //             <ul>
// //                 <li>
// //                     <NavLink to="/Swagger1">Swagger</NavLink>
// //                 </li>
// //             </ul>
// //         </nav> */}
// //         <Link to='/'>
// //         </Link>
// //     </div>)
// // }
// // export default NavBar;


// import React, { useState } from "react";
// import "swagger-ui-react/swagger-ui.css";
// import "./styles.css";
// import Link from 'react-dom'
// import Swagger1 from "./Swagger";
// import { Swagger2 } from "./Swagger";
// function App() {
//     const [flag, setFlag] = useState(false)
//     const fun = () => {
//         setFlag(true)
//         // setFlag(!flag);
//         // setFlag1(false);
        
//     }
//     const onBack = () => {

//         setFlag(false)
//     }
//     const [flag1, setFlag1] = useState(false)
//     const fun1 = () => {
//         setFlag1(true)
//         // setFlag1(!flag1);
//         // setFlag(false);
        
//     }
//     const onBack1 = () => {
//         setFlag1(false)
//     }
//     return (
//         <div ><>
//             <h1> API Documentation</h1>
//             {
//                 !flag &&
//                 <button style={{
//                     backgroundColor: 'salmon',
//                     color: 'white',
//                     width: "100px", height: "30px",
//                 }} onClick={fun}  >CLPL_Project</button>
//             }</>

//             {flag &&
//                 <>
//                     <Swagger1 />
//                     <button style={{
//                         backgroundColor: 'black',
//                         color: 'white',
//                         width: "100px", height: "30px",
//                     }} onClick={onBack}>Back</button>
//                 </>
//             }
//             <br />
//             <br />
//             {
//                 !flag1 &&
//                 <button style={{
//                     backgroundColor: 'salmon',
//                     color: 'white',
//                     width: "100px", height: "30px",
//                 }} onClick={fun1}  >LSQ_Project</button>

//             }
//             {flag1 &&
//                 <>
//                     <Swagger2 />
//                     <button style={{
//                         backgroundColor: 'black',
//                         color: 'white',
//                         width: "100px", height: "30px",
//                     }} onClick={onBack1}>Back</button>

//                 </>
//             }
//         </div>)
// }
// export default App;

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <p>Go to the contact page by using one of the following:</p>
      <hr />

      {/* Button */}
      <p>
        <button onClick={() => navigate("/swagger")}>Go to Contact</button>
      </p>

      {/* Checkbox */}
      {/* <p>
        <input
          type="checkbox"
          onChange={() => navigate("/contact")}
        ></input>
        <span>Check this checkbox to go to the contact page</span>
      </p> */}

      {/* Text field */}
      {/* <p>
        <input
          type="text"
          onChange={(e) => {
            if (e.target.value === "contact") {
              navigate("/contact");
            }
          }}
          placeholder="Enter 'contact' to navigate"
        ></input>
      </p> */}


  {/* <div>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="/swagger">Swagger</NavLink>

                        </li>
                        <li>
                            <NavLink to="/swagger2">Swagger2</NavLink>

                        </li>
                    </ul>
                </nav>
            </div> */}

    </>
  );
};

export default Home;