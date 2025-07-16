import React, { useState, useRef, useEffect } from "react";
import "./chantRoom.scss"
const ChantRoom = (
  {
    roomName,
    isOwner,
    userName,
    chantGiver
  }: {
    roomName: string,
    isOwner: boolean,
    userName: string,
    chantGiver: string
  }
) => {
  const [chant, setChant] = useState("");
  const [chantList, setChantList] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null)

  const sendChant = () => {
    if (!chant.trim()) return;
    setChantList(prev => [...prev, `${userName}: ${chant}`]);
    setChant("");
  }

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chantList]
  )

  return (
    <div className="chant-room">
      <header>
        <button className="exit-button">
          home
        </button>
        <h2>
          {roomName}
        </h2>
        <h3>
          {chantGiver}
        </h3>

      </header>

      <div className="chant-display">
        {chantList.map((c, i) => (
          <div key={i} className="chant-message">{c}</div>
        ))}
        <div ref={scrollRef} />
      </div>

      {isOwner && (
        <div>
          <input 
            className="chant-input-text-area"
            placeholder="type here your message"
            onChange={(e)=> setChant(e.target.value)}
            value={chant}
            onKeyDown={(e)=> e.key === "Enter" && sendChant()}
          />
          <button onClick={sendChant}>
          send out chant
        </button>
        </div>

        
      )}

    </div>
  )
}

export default ChantRoom;