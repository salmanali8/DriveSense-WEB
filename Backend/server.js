const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const admin = require("firebase-admin");
const cors = require("cors");

// Initialize Firebase Admin SDK
const serviceAccount = {
  type: "service_account",
  project_id: "my-esp32-project-1c6a6",
  private_key_id: "353a609aa8b5d6679aa86680544ee0d9a5367b92",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCy1tkIPDqzUGwK\nS3VpPVjUEwNIro30TMVzY48Lr1+3uka+oTf3FudNsM2apdU1SwsY+MEtvdvAdRp8\nYIeEtIeReHCy8WKh2GZbY6Yy0/JSl2u1opsSmWgkf2UD58BWX8PwGcnXM+aRMF/O\n227dQBKBXSEgpbDemRJ0wr0zPGaTZ+STa9fmlAeyK9gUczWyK1spTarYX8lFqY/q\nUEyR7cuvHm7RWFtrDwcO6alzOCh15JeEYzLFc7+XFczmCE4et5hqG+Dwc3mhYYpB\nn2DFovQar9mGtlLhdFmsTJ5TUJJNebrqxV4xyf2YoD5TScnyj8CeuuAV6TM0Z3Qx\nWP57e+e5AgMBAAECggEATuB1nq050qaQ0EWRxlXZXMf59c+PKoXFvGvXxnaWB+mv\nlBp1HZTLdbeaJzAnBjdP8LaeNTd8ubisctj8TGp3NJDjW/kc4HcaRgqAXgCe6xB/\n3/+U17IzfY12ly9a5H2eZMJrBHCOq9CjIRAlKI4+2zGhD84kYTkwK7FMU1G7iB1Y\nskVSrrap/4ztFZgkYZ5m+ryJVibEJW9E+u0eydH7EZw2vwJBC5Z4Xy+9TrvN7vu2\nlN5ab2Oiwb3L9GtsasZD4usm5TemJJC4a0DUwsQcrOELyF2WwqjH5L8gnhdgXjH9\n/wzNWz/y94n27pbHjUKZEUQN99AEEBRD8pjaag32FQKBgQDXjVKcH6ANsXAQDlFH\nIvOciL8mhga7AQvbhfN5D5p4qfVSLCSHZe+uLEtoPFuL1uqs0YAoont4gRjaHmtj\nZcPcM9x7h7Wf1VP+T3CYfnCQ7zP9H0Uafpn1KpFkC/18yA4ftDx3iuStTyW1/V1r\nUPBvEEhX2lIvoNQ8uNIoWcj4VwKBgQDUZer+XXxPCsKGQlQvNvj2uUDROe3n7RCb\nQ55t9/zJlkqK2tjMsm7DwscY1Td+CD1zxGfiyfypECfRJjmDCVikNXoOFrK2/2MQ\n7ZfCbW6QZo0Ltl51+0nAJnI6dCymthECrOnysAYyPbn+qev/FgOyRY52u7oxiFMD\n1EYjjo1WbwKBgQDSWUx7pPUZR8X3NTGl/PrFEEGRw4s/5OaAZLjTtCFnjVwkw4Um\nSJjcXMd9wiEIV0QOQCgT/3QEhd8NxE/B4SaAdm+8cRQSFSlxbG6RshoBph0S7/gM\nwe1WbiMSAg1uPwBheg7kDbvZUPqZHdaTipoHmFkwupInfoh/dVFJJU1U4wKBgQCM\noO52fG9R5k3llwUmPb+ZnA7OeQyMAup74smDBi7ZSikQxtXEsl+kPdKVHpcfW1VU\n0TX3csVXKtsyH5z0pbuK/d1SdrTddTqieq2AjfQmp7+7gYQJmde64bm/+iuWNfYN\nT2+Wv/VaToRXmSooOus3ndY1xxYAtcJBRsspv7jVAQKBgHdt+Xo2u+LgZ9dgLwhW\nzCCYILCzD1ztZ0TNDbg4xRi4ejABA8rEgy+MNtvcGebmtDCUJHbpQQmJldE8Y69j\nCvYlglpDFQ2HtkdThgBwxNebLsgG83kjnT6KB6II3qRH53ojzK+wGhp5XkkZUTYE\nybKQ/kSxUTcGu5HEWue00xy0\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-22ezq@my-esp32-project-1c6a6.iam.gserviceaccount.com",
  client_id: "109741072880896502275",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-22ezq%40my-esp32-project-1c6a6.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    "https://my-esp32-project-1c6a6-default-rtdb.asia-southeast1.firebasedatabase.app",
});

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Test Firebase connection
// app.get("/api/test-firebase", async (req, res) => {
//   try {
//     const doc = await admin.firestore().collection("test").doc("testDoc").get();
//     const data = doc.data();
//     res.status(200).json({ success: true, data });
//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// User signup endpoint
app.post("/api/signup", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Create user with provided email and password
    const userRecord = await admin.auth().createUser({
      email,
      password,
    });
    res.status(201).json({
      success: true,
      message: "User signed up successfully!",
      user: userRecord,
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

// User signin endpoint
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;
  try {
    // Authenticate user with provided email and password

    const userCredential = await admin.auth().getUserByEmail(email);

    // Check if the provided password matches the stored password hash
    // For simplicity, this logic should be replaced with a more secure password hashing and comparison mechanism

    if (userCredential) {
      // Return success response if authentication is successful
      res.status(200).json({
        success: true,
        message: "User signed in successfully!",
        user: userCredential.toJSON(),
      });
    } else {
      // Return error response if authentication fails
      res
        .status(401)
        .json({ success: false, error: "Invalid email or password." });
    }
  } catch (error) {
    // Return error response if any error occurs during authentication
    res.status(500).json({ success: false, error: error.message });
  }
});

// Admin signin endpoint
app.post("/api/admin/signin", async (req, res) => {
  const { email, password } = req.body;
  console.log("Requested Email:", email); // Log the email from the request body

  try {
    // Retrieve admin document from Firestore based on the provided email
    const adminDoc = await admin
      .firestore()
      .collection("AdminPanel")
      .where("email", "==", email) // Query documents based on email field
      .get();

    if (adminDoc.empty) {
      console.log("Admin document not found for Email:", email);
      return res
        .status(401)
        .json({ success: false, error: "Invalid email or password." });
    }

    const adminData = adminDoc.docs[0].data(); // Assuming there's only one document per email
    const adminId = adminDoc.docs[0].id; // Get the document ID

    if (adminData.password === password) {
      return res
        .status(200)
        .json({ success: true, message: "Admin signed in successfully!" });
    } else {
      return res
        .status(401)
        .json({ success: false, error: "Invalid email or password." });
    }
  } catch (error) {
    console.error("Error during admin sign-in:", error);
    return res
      .status(500)
      .json({ success: false, error: "An unexpected error occurred." });
  }
});

// Endpoint to fetch latitude and longitude from Firebase

app.get("/api/location", (req, res) => {
  // Assuming your data is stored under a 'devices' node
  admin
    .database()
    .ref("device")
    .once("value")
    .then((snapshot) => {
      const deviceData = snapshot.val();
      const latitude = deviceData.latitude;
      const longitude = deviceData.longitude;
      console.log(latitude, longitude);
      res.json({ latitude, longitude });
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// // Endpoint to fetch vehicle data from Firestore
// // Endpoint to fetch vehicle name from Firestore
// app.get("/api/vehicles", async (req, res) => {
//   try {
//     // User ID or document ID
//     const userId = "JE3TgOR2QjMBwwalSgybey8T9x22";
//     console.log("User ID:", userId); // Debugging log

//     // Construct the Firestore document reference
//     const userDocRef = admin
//       .firestore()
//       .collection("DriveSenseUsers")
//       .doc(userId)
//       .collection("userData")
//       .doc(userId);
//     console.log("User Document Reference Path:", userDocRef.path); // Debugging log

//     // Fetch the document
//     const userDocSnapshot = await userDocRef.get();
//     console.log("Document Snapshot:", userDocSnapshot); // Debugging log

//     // Check if the document exists
//     if (!userDocSnapshot.exists) {
//       console.log("Document does not exist for user ID:", userId); // Debugging log
//       return res
//         .status(404)
//         .json({ success: false, error: "User document not found" });
//     }

//     // Access the specific fields from the document data
//     const userData = userDocSnapshot.data();
//     console.log("User Data:", userData); // Debugging log

//     const vehiclename = userData.vehiclename;
//     const vehiclenumber = userData.vehiclenumber;
//     const vehicleowner = userData.vehicleowner;
//     console.log("Vehicle Data:", { vehiclename, vehiclenumber, vehicleowner }); // Debugging log

//     // Responding with success and the vehicle details
//     res.status(200).json({
//       success: true,
//       vehiclename,
//       vehiclenumber,
//       vehicleowner,
//     });
//   } catch (error) {
//     // Handling any errors that occur during Firestore query
//     console.error("Error fetching vehicle details:", error); // Detailed error logging
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

//Dashboard Code

app.get("/api/vehicles", async (req, res) => {
  try {
    const vehicleRequestsRef = admin.firestore().collection("VehicleRequests");
    const snapshot = await vehicleRequestsRef.get();
    if (snapshot.empty) {
      console.log("No matching documents.");
      return res
        .status(404)
        .json({ success: false, error: "No documents found" });
    }
    const vehicleRequests = [];
    snapshot.forEach((doc) => {
      const requestData = doc.data();
      requestData.id = doc.id;
      vehicleRequests.push(requestData);
    });
    // Respond with success and the array of documents
    res.status(200).json({ success: true, vehicleRequests });
  } catch (error) {
    // Handle errors
    console.error("Error fetching vehicle requests:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/api/accept-request", async (req, res) => {
  const { id } = req.body;
  try {
    const vehicleRequestsRef = admin
      .firestore()
      .collection("VehicleRequests")
      .doc(id);
    const doc = await vehicleRequestsRef.get();
    if (!doc.exists) {
      return res
        .status(404)
        .json({ success: false, error: "Document not found" });
    }

    const data = doc.data();
    await admin.firestore().collection("Vehicles").doc(id).set(data);
    await vehicleRequestsRef.delete();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error accepting request:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.post("/api/reject-request", async (req, res) => {
  const { id } = req.body;
  try {
    const vehicleRequestsRef = admin
      .firestore()
      .collection("VehicleRequests")
      .doc(id);
    await vehicleRequestsRef.delete();

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error rejecting request:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Endpoint to update control_command in Firebase based on toggle state

app.post("/api/toggle-control-command", async (req, res) => {
  try {
    const { userId, command } = req.body;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, error: "userId is required" });
    }

    // Update control_command for the specified user ID
    await admin
      .database()
      .ref(`users/${userId}`)
      .update({ control_command: command });

    res
      .status(200)
      .json({ success: true, message: "Control command updated successfully" });
  } catch (error) {
    console.error("Error updating control command:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
