import React, { useState, useEffect } from "react";
import axios from "axios";
import "./dashboard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faToggleOn,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("vehicles");
  const [requests, setRequests] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/vehicles");
      if (response.data.success) {
        setRequests(response.data.vehicleRequests);
      } else {
        console.error("Failed to fetch vehicle requests:", response.data.error);
      }
    } catch (error) {
      console.error("Error fetching requests:", error);
    }
  };

  const handleAccept = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/accept-request",
        { id }
      );
      if (response.data.success) {
        const acceptedRequest = requests.find((req) => req.id === id);
        setVehicles([...vehicles, acceptedRequest]);
        setRequests(requests.filter((req) => req.id !== id));
      } else {
        console.error("Failed to accept request:", response.data.error);
      }
    } catch (error) {
      console.error("Error accepting request:", error);
    }
  };

  const handleReject = async (id) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reject-request",
        { id }
      );
      if (response.data.success) {
        setRequests(requests.filter((req) => req.id !== id));
      } else {
        console.error("Failed to reject request:", response.data.error);
      }
    } catch (error) {
      console.error("Error rejecting request:", error);
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "vehicles":
        return (
          <div className="vehicles-list">
            <h2>Vehicles List</h2>
            <table>
              <thead>
                <tr>
                  <th>Vehicle Name</th>
                  <th>Vehicle Number</th>
                  <th>Owner Name</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle, index) => (
                  <tr key={index}>
                    <td>{vehicle.vehiclename}</td>
                    <td>{vehicle.vehiclenumber}</td>
                    <td>{vehicle.vehicleowner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case "requests":
        return (
          <div className="requests">
            <h2>Requests</h2>
            <table>
              <thead>
                <tr>
                  <th>Request ID</th>
                  <th>Vehicle Name</th>
                  <th>Vehicle Number</th>
                  <th>Owner Name</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {requests.map((request, index) => (
                  <tr key={index}>
                    <td>{request.id}</td>
                    <td>{request.vehiclename}</td>
                    <td>{request.vehiclenumber}</td>
                    <td>{request.vehicleowner}</td>
                    <td>
                      <button onClick={() => handleAccept(request.id)}>
                        Accept
                      </button>
                      <button onClick={() => handleReject(request.id)}>
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="sidebar-header">Admin</div>
        <button
          className={`sidebar-button ${
            activeTab === "vehicles" ? "active" : ""
          }`}
          onClick={() => setActiveTab("vehicles")}
        >
          Vehicles List
        </button>
        <button
          className={`sidebar-button ${
            activeTab === "requests" ? "active" : ""
          }`}
          onClick={() => setActiveTab("requests")}
        >
          Requests
        </button>
      </div>
      <div className="main-content">{renderContent()}</div>
    </div>
  );
}

export default Dashboard;
