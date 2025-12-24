// import React from 'react';

// function Signup() {
//   return (  
//     <h1>Signup</h1>
//   );
// }

// export default Signup;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Signup Data:", formData);

//     alert("Account created successfully");

//     navigate("/"); // 👈 ALERT ke baad HOME
//   };

//   return (
//     <div className="container p-5">
//       <div className="row justify-content-center">
//         <div className="col-6 border p-4 rounded">
//           <h1 className="text-center mb-4">Create your account</h1>

//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label className="form-label">Full Name</label>
//               <input
//                 type="text"
//                 name="name"
//                 className="form-control"
//                 placeholder="Enter your name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Email</label>
//               <input
//                 type="email"
//                 name="email"
//                 className="form-control"
//                 placeholder="Enter your email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-3">
//               <label className="form-label">Mobile Number</label>
//               <input
//                 type="tel"
//                 name="mobile"
//                 className="form-control"
//                 placeholder="Enter mobile number"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <div className="mb-4">
//               <label className="form-label">Password</label>
//               <input
//                 type="password"
//                 name="password"
//                 className="form-control"
//                 placeholder="Create password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>

//             <button type="submit" className="btn btn-primary w-100">
//               Create Account
//             </button>
//           </form>

//           <p className="text-center text-muted mt-3">
//             Already have an account? <span style={{ cursor: "pointer" }}>Login</span>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/signup", {
        email: formData.email,
        password: formData.password,
      });

      alert("Account created successfully");
      navigate("/login"); // ✅ signup ke baad login
    } catch (err) {
      alert(err.response?.data || "Signup failed");
    }
  };

  return (
    <div className="container p-5">
      <div className="row justify-content-center">
        <div className="col-6 border p-4 rounded">
          <h1 className="text-center mb-4">Create your account</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Mobile Number</label>
              <input
                type="tel"
                name="mobile"
                className="form-control"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Create Account
            </button>
          </form>

          <p className="text-center text-muted mt-3">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;




