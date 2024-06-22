// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Auth.css";

// function AdminSignin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/admin/signin",
//         {
//           email,
//           password,
//         }
//       );

//       console.log(response.data);
//       navigate("/Admindashboard");
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Admin Login Page</h2>
//       <form onSubmit={handleSubmit} className="auth-form">
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Sign In</button>
//       </form>
//       {error && <p className="error-message">{error}</p>}
//     </div>
//   );
// }

// export default AdminSignin;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./adminpage.css";

// function AdminSignin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/admin/signin",
//         {
//           email,
//           password,
//         }
//       );

//       console.log(response.data);
//       navigate("/Admindashboard");
//     } catch (error) {
//       setError(error.response.data.error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="auth-container">
//             <h2 className="text-center mb-4">Admin Login </h2>
//             <form onSubmit={handleSubmit} className="auth-form">
//               <div className="mb-3">
//                 <input
//                   type="email"
//                   className="form-control"
//                   placeholder="Email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   type="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <button type="submit" className="btn btn-primary btn-block">
//                   Sign In
//                 </button>
//               </div>
//             </form>
//             {error && <p className="error-message">{error}</p>}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AdminSignin;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./adminpage.css";

function AdminSignin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/admin/signin",
        {
          email,
          password,
        }
      );

      console.log(response.data);
      navigate("/Dashboard");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div className="container" style={{ marginTop: "30px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow auth-container">
            <h2 className="card-title text-center mt-3">Admin Login</h2>
            <form onSubmit={handleSubmit} className="auth-form p-3">
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary btn-block">
                  Sign In
                </button>
              </div>
            </form>
            {error && <p className="error-message text-center">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSignin;
