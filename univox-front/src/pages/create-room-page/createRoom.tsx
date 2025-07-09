import React, { useState } from "react";
import "./createRoom.scss";

function CreateRoom() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    roomName: "",
    chantGiver: "",
    chantSayers: 1,
    expirationMinutes: 60,
  })

  const handleChange = (field: string, value: string | number) => {
    setFormData(prev => ({...prev, [field]: value}));
  
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const now = Math.floor(Date.now()/1000);
    const expirationDate = now + Number(formData.expirationMinutes) * 60;

    const roomData = {
      ...formData,
      creationDate: now,
      expirationDate
    };

    try {
      const response = await fetch("seuBackend/rooms", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({roomData})
      });
      if(!response.ok) {throw new Error("Error creating chant")};
      setMessage("Chant created successfully");
    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <button onClick={()=> window.location.href="/"}>
        home
      </button>
      <div className="create-room-container">
        <h2>
          Create New Chant
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span>
              Chant Name
            </span>
            <input
              type="text"
              onChange={(e) => handleChange("roomName", e.target.value)}
              value={formData.roomName}
            />
          </div>
          <div className="field">
            <span>
              Chant Giver
            </span>
            <input
              type="text"
              onChange={(e) => handleChange("chantGiver", e.target.value)}
              value={formData.chantGiver}
              />
          </div>
          <div className="field">
            <span>
              Chant Sayers
            </span>
            <input
            type="number"
            min="1"
            onChange={(e) => handleChange("chantSayers", e.target.value)}
            value={formData.chantSayers}
            />
          </div>
          <div className="field">
            <span>
             Expiration Time (in minutes)
            </span>
            <input
            type="number"
            min="1"
            onChange={(e) => handleChange("expirationMinutes", e.target.value)}
            value={formData.expirationMinutes}
            />
          </div>

          <button type="submit" disabled={loading}>
            {loading ? "Creating...":"Create Chant"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  )
}
export default CreateRoom;

