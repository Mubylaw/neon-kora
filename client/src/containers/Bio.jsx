import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/demo.css";
import { connect } from "react-redux";

const Bio = ({}) => {
  useEffect(() => {
    if (window.PublicKeyCredential) {
      // Generate a challenge (example: a random 32-byte buffer)
      const challenge = new Uint8Array(32); // Create a 32-byte Uint8Array
      window.crypto.getRandomValues(challenge); // Fill it with cryptographically secure random values

      // Generate a user ID (example: using a string and converting it to Uint8Array)
      const userId = new TextEncoder().encode("1234"); // Encode the user ID as UTF-8

      const options = {
        publicKey: {
          rp: { id: "neon-kora.onrender.com", name: "Cosmo’s Clown Store" },
          user: {
            id: userId, // Use the Uint8Array for the user ID
            name: "krusty@example.com",
            displayName: "Krusty The Clown",
          },
          challenge: challenge, // Use the generated challenge
          pubKeyCredParams: [{ type: "public-key", alg: -7 }],
          authenticatorSelection: {},
          // Additional options can be added here
        },
      };

      // Create a new credential
      navigator.credentials
        .create(options)
        .then((credential) => {
          // Handle the created credential
          console.log("Credential created:", credential);
        })
        .catch((error) => {
          console.error("Error creating credential:", error);
        });

      // Uncomment if you want to get existing credentials
      // navigator.credentials.get(options);
    } else {
      alert("Cannot use biometrics on this device");
    }
  }, []);

  return (
    <div className="demo-home">
      <div className="header">
        <div className="logo">
          <img src="/assets/logo.png" alt="" />
        </div>
        <div className="hom">
          <a href="/">Home</a>
        </div>
      </div>
      <div className="onp">
        <div className="check">
          <h1>Checks for biometrics capability</h1>
        </div>

        <div className="again">
          <a href="/">Go home</a>
        </div>
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(Bio);
