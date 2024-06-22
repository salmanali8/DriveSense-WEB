// // HomePage.js
// import React from "react";
// import backgroundImage from "./Images/background.jpg";
// import image1 from "./Images/1.png";
// import image2 from "./Images/2.png";
// import image3 from "./Images/3.png";

// const HomePage = () => {
//   return (
//     <>
//       {/* Background Image Section */}
//       <div
//         className="background-image-section"
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           height: "500px", // Adjust the height as needed
//           backgroundSize: "cover", // Ensure the background image covers the entire element
//           backgroundPosition: "center", // Center the background image
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           flexDirection: "column",
//           color: "white",
//           textAlign: "center",
//           backgroundColor: "rgba(0, 0, 0, 0.8)",
//         }}
//       >
//         <h1>Your Security Partner</h1>
//         <div style={{ marginTop: "10px" }}>
//           <button type="button" class="btn btn-warning mr-3">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Content Section */}
//      <div
//   className="content-section"
//   style={{
//     backgroundColor: "white",
//     padding: "50px 0",
//     display: "flex",
//     justifyContent: "center",
//     margin:"0 20px",
//   }}
// >
//   <div
//     className="content-wrapper"
//     style={{
//       display: "flex",
//       alignItems: "center",
//       gap: "20px", // Add gap between images
//     }}
//   >
//     <div style={{ marginRight: "20px", textAlign: "center" }}>
//       <img
//         src={image1}
//         alt="Image 1"
//         style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }} // Center image
//       />
//       <p style={{ fontSize: "10px", textAlign: "justify" }}>
//         In recent years, advancements in automotive technology have
//         revolutionized vehicle safety standards. From collision avoidance systems
//         to adaptive cruise control, modern cars are equipped with cutting-edge
//         features aimed at minimizing accidents and protecting occupants.
//       </p>
//     </div>
//     <div style={{ marginRight: "20px", textAlign: "center" }}>
//       <img
//         src={image2}
//         alt="Image 2"
//         style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }} // Center image
//       />
//       <p style={{ fontSize: "10px", textAlign: "justify" }}>
//         Another crucial aspect of car safety is crashworthiness, which refers to
//         a vehicle's ability to protect passengers in the event of a collision.
//         Rigorous testing and engineering innovations have led to the development
//         of reinforced structures, airbag systems, and seatbelt technologies to
//         enhance crash survivability.
//       </p>
//     </div>
//     <div style={{ textAlign: "center" }}>
//       <img
//         src={image3}
//         alt="Image 3"
//         style={{ width: "200px", height: "200px", display: "block", margin: "0 auto" }} // Center image
//       />
//       <p style={{ fontSize: "10px", textAlign: "justify" }}>
//         The emergence of driver assistance technologies, such as lane departure
//         warning systems and automatic emergency braking, plays a pivotal role
//         in preventing accidents caused by human error. These technologies act
//         as an extra set of eyes on the road, providing alerts and interventions
//         to help drivers avoid potential hazards.
//       </p>
//     </div>
//   </div>
// </div>

//     </>
//   );
// };

// export default HomePage;

// import React from "react";
// import backgroundImage from "./Images/background.jpg";
// import image1 from "./Images/1.png";
// import image2 from "./Images/2.png";
// import image3 from "./Images/3.png";
// import "./home.css";

// const HomePage = () => {
//   return (
//     <>
//       {/* Background Image Section */}
//       <div
//         className="background-image-section"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="overlay">
//           <h1>Your Security Partner</h1>
//           <button type="button" className="btn btn-warning mt-3">
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="content-section container py-5">
//         <div className="row text-center mb-4">
//           <div className="col-12">
//             <img src={image1} alt="Image 1" className="img-fluid mb-3" />
//             <p className="image-text">
//               In recent years, advancements in automotive technology have
//               revolutionized vehicle safety standards. From collision avoidance
//               systems to adaptive cruise control, modern cars are equipped with
//               cutting-edge features aimed at minimizing accidents and protecting
//               occupants.
//             </p>
//           </div>
//         </div>
//         <div className="row text-center">
//           <div className="col-lg-6 mb-4">
//             <img src={image2} alt="Image 2" className="img-fluid mb-3" />
//             <p className="image-text">
//               Another crucial aspect of car safety is crashworthiness, which
//               refers to a vehicle's ability to protect passengers in the event
//               of a collision. Rigorous testing and engineering innovations have
//               led to the development of reinforced structures, airbag systems,
//               and seatbelt technologies to enhance crash survivability.
//             </p>
//           </div>
//           <div className="col-lg-6 mb-4">
//             <img src={image3} alt="Image 3" className="img-fluid mb-3" />
//             <p className="image-text">
//               The emergence of driver assistance technologies, such as lane
//               departure warning systems and automatic emergency braking, plays a
//               pivotal role in preventing accidents caused by human error. These
//               technologies act as an extra set of eyes on the road, providing
//               alerts and interventions to help drivers avoid potential hazards.
//             </p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HomePage;


// src/components/HomePage.jsx
// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
// import backgroundImage from './Images/background.jpg';
// import image1 from './Images/1.png';
// import image2 from './Images/2.png';
// import image3 from './Images/3.png';
// import './home.css';

// const HomePage = () => {
//   return (
//     <div>
//       {/* Background Image Section */}
//       <div
//         className="background-image-section"
//         style={{ backgroundImage: `url(${backgroundImage})` }}
//       >
//         <div className="overlay">
//           <h1>Your Security Partner</h1>
//           <Link to="/signup" className="btn btn-warning mt-3">
//             Get Started
//           </Link>
//         </div>
//       </div>

//       {/* Images and Paragraphs Section */}
//       <div className="images-section">
//         <div className="image-container">
//           <img src={image1} alt="Image 1" />
//           <p>Paragraph 1</p>
//         </div>
//         <div className="image-container">
//           <img src={image2} alt="Image 2" />
//           <p>Paragraph 2</p>
//         </div>
//         <div className="image-container">
//           <img src={image3} alt="Image 3" />
//           <p>Paragraph 3</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React from "react";
//  import backgroundImage from "./Images/background.jpg";
//  import image1 from "./Images/1.png";
//  import image2 from "./Images/2.png";
// import image3 from "./Images/3.png";
// import "./home.css";

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="background-image-container">
//         <img
//           src={backgroundImage}
//           alt="Background"
//           className="background-image"
//         />
//       </div>
//       <div className="content-section">
//         <div className="image-section">
//           <div className="image-container">
//             <img src={image1} alt="Image 1" className="image" />
//             <p>
//               In recent years, advancements in automotive technology have
//               revolutionized vehicle safety standards. From collision avoidance
//               systems to adaptive cruise control, modern cars are equipped with
//               cutting-edge features aimed at minimizing accidents and protecting
//               occupants.
//             </p>
//           </div>
//           <div className="image-container">
//             <img src={image2} alt="Image 2" className="image" />
//             <p>
//               Another crucial aspect of car safety is crashworthiness, which
//               refers to a vehicle's ability to protect passengers in the event
//               of a collision. Rigorous testing and engineering innovations have
//               led to the development of reinforced structures, airbag systems,
//               and seatbelt technologies to enhance crash survivability.
//             </p>
//           </div>
//           <div className="image-container">
//             <img src={image3} alt="Image 3" className="image" />
//             <p>
//               The emergence of driver assistance technologies, such as lane
//               departure warning systems and automatic emergency braking, plays a
//               pivotal role in preventing accidents caused by human error. These
//               technologies act as an extra set of eyes on the road, providing
//               alerts and interventions to help drivers avoid potential hazards.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React from "react";
  import backgroundImage from "./Images/background.jpg";
  import image1 from "./Images/1.png";
  import image2 from "./Images/2.png";
 import image3 from "./Images/3.png";
 import "./home.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="background-image-container">
        <img
          src={backgroundImage}
          alt="Background"
          className="background-image"
        />
      </div>
      <div className="content-section">
        <div className="image-section">
          <div className="image-container">
            <img src={image1} alt="Image 1" className="image" />
            <p>
              Recent advancements in technology have transformed everyday life.
              From smartphones to smart homes, innovation has become ubiquitous.
              The pace of change continues to accelerate, reshaping industries
              and revolutionizing communication.
            </p>
          </div>
          <div className="image-container">
            <img src={image2} alt="Image 2" className="image" />
            <p>
              Environmental sustainability is a pressing global concern. Efforts
              to mitigate climate change are gaining momentum worldwide.
              Innovations in renewable energy hold promise for a greener future,
              reducing dependence on fossil fuels.
            </p>
          </div>
          <div className="image-container">
            <img src={image3} alt="Image 3" className="image" />
            <p>
              Education remains fundamental to individual and societal
              development. Access to quality education empowers individuals and
              promotes social mobility. Technological integration in classrooms
              enhances learning experiences preparing students. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
