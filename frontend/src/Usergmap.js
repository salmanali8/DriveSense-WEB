// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const Usergmap = () => {
//   const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/api/location");
//         setLocation({
//           latitude: parseFloat(response.data.latitude),
//           longitude: parseFloat(response.data.longitude),
//         });
//       } catch (error) {
//         console.error("Error fetching location:", error);
//       }
//     };

//     fetchLocation();
//   }, []);

//   const mapStyles = {
//     height: "400px",
//     width: "100%",
//   };

//   return (
//     <div>
//       <h1>Real-time Location Tracking</h1>
//       <LoadScript
//         googleMapsApiKey="AIzaSyCqcHnlKWpdoKNkhJjxHxCL3_kCCWNMrlw"
//         async
//         defer
//         onLoad={() => console.log("Google Maps API loaded successfully")}
//         onError={() => console.error("Error loading Google Maps API")}
//       >
//         <GoogleMap
//           mapContainerStyle={mapStyles}
//           zoom={10}
//           center={{ lat: location.latitude, lng: location.longitude }}
//         >
//           <Marker
//             position={{ lat: location.latitude, lng: location.longitude }}
//           />
//         </GoogleMap>
//       </LoadScript>
//     </div>
//   );
// };

// export default Usergmap;

// src/UserGmap.js
// import React, { useEffect, useState } from "react";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import axios from "axios";

// // Fix the default icon issue with Leaflet in React
// delete L.Icon.Default.prototype._getIconUrl;

// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
//   iconUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   shadowUrl:
//     "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
// });

// const UserGmap = () => {
//   const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

//   useEffect(() => {
//     // Fetch location data from the server using Axios
//     axios
//       .get("http://localhost:5000/api/location")
//       .then((response) => {
//         const data = response.data;
//         setLocation({ latitude: data.latitude, longitude: data.longitude });
//       })
//       .catch((error) => console.error("Error fetching location:", error));
//   }, []);

//   return (
//     <MapContainer
//       center={[location.latitude, location.longitude]}
//       zoom={16}
//       style={{ height: "200px", width: "50%" }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <Marker position={[location.latitude, location.longitude]}>
//         <Popup>Your Location</Popup>
//       </Marker>
//     </MapContainer>
//   );
// };

// export default UserGmap;

import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import axios from "axios";

// Fix the default icon issue with Leaflet in React
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const UserGmap = () => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const [mapCenter, setMapCenter] = useState({ lat: 0, lng: 0 });
  const [mapZoom, setMapZoom] = useState(5);

  useEffect(() => {
    // Fetch location data from the server using Axios
    axios
      .get("http://localhost:5000/api/location")
      .then((response) => {
        const data = response.data;
        setLocation({ latitude: data.latitude, longitude: data.longitude });
      })
      .catch((error) => console.error("Error fetching location:", error));
  }, []);

  useEffect(() => {
    // Update map center and zoom level when location changes
    if (location.latitude !== 0 && location.longitude !== 0) {
      setMapCenter({ lat: location.latitude, lng: location.longitude });
      setMapZoom(5);
    }
  }, [location]);

  return (
    <MapContainer
      center={[mapCenter.lat, mapCenter.lng]}
      zoom={mapZoom}
      style={{ height: "500px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {location.latitude !== 0 && location.longitude !== 0 && (
        <Marker position={[location.latitude, location.longitude]}>
          <Popup>Your Location</Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default UserGmap;
