import React, { useState } from "react";

function CreateRoom() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [formData, setFormData] = useState({
    roomName: "",
    chantGiver: "",
    chantSayers: 1,
    expirationMinutes: 60,
  })

  const handleChange = (field: string, value: string | number) => { }

  const handleSubmit = () => { }

  return (
    <>
      <button>
        home
      </button>
      <div className="create-room-container">
        <h2>
          Create a New Room
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <span>
              Room Name
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
            {loading ? "Creating...":"Create Room"}
          </button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </>
  )
}
export default CreateRoom;

