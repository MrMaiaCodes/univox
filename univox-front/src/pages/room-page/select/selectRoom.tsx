import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "./selectRoom.scss"; 
import Loader from "../../../components/loader/loader";

type Room = {
  id: number;
  roomName: string;
  chantGiver: string;
  chantSayers: number;
  creationDate: string;
  expirationDate: string;
}

const SelectRoom: React.FC = ()=> {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(()=> {
    axios.get("http://localhost:4000/rooms")
    .then(response => {
      setRooms(response.data.data);
    })
    .catch(error => {
      console.error("erro ao configurar a sala: ", error);
      setRooms([
        {
          "id": 1,
          "roomName": "First Room",
          "chantGiver": "John Doe",
          "chantSayers": 1000,
          "creationDate": "1744798718",
          "expirationDate": "1744798999",
        },
        {
          "id": 1,
          "roomName": "First Room",
          "chantGiver": "John Doe",
          "chantSayers": 1000,
          "creationDate": "1744798718",
          "expirationDate": "1744798999",
        },
        {
          "id": 2,
          "roomName": "Second Room",
          "chantGiver": "John Doe",
          "chantSayers": 1000,
          "creationDate": "1744798718",
          "expirationDate": "1744798999",
        },
        {
          "id": 3,
          "roomName": "Third Room",
          "chantGiver": "John Doe",
          "chantSayers": 1000,
          "creationDate": "1744798718",
          "expirationDate": "1744798999",
        },
        {
          "id": 4,
          "roomName": "Fourth Room",
          "chantGiver": "John Doe",
          "chantSayers": 1000,
          "creationDate": "1744798718",
          "expirationDate": "1744798999",
        }
      ])
    })
    .finally(()=> setLoading(false));

  }, []);

  function enterRoom(roomId: number) {
    alert(`Entering room with Id: ${roomId}`);
    //configurar aqui navegação para a sala, exemplo navigate("/room/id")
  }

  if(loading) return (<Loader loading={loading}/>)

  return (
    <div className="rooms-list-container">
      <h2>Choose a Chant</h2>
      <ul className="rooms-list">
        {
          rooms.map(room => (
            <li key={room.id} className="rooms-card" onClick={()=> enterRoom(room.id)}>
              <h3>{room.roomName}</h3>
              <p><strong>giver:</strong> {room.chantGiver}</p>
              <p><strong>people chanting:</strong>{room.chantSayers}</p>
            </li>
          ))
        }
      </ul>

      <div className="button-container-login">
        <button onClick={()=> navigate("/")}>back to home</button>
      </div>
    </div>

  )
}
export default SelectRoom;