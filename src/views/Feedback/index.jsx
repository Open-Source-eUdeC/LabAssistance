import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
//
import "./index.scss";

export default function Feedback() {
  const [name, setName] = useState(null);
  
  const user_data = useSelector(state => state.student_data);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user_data || (user_data.name === null)) {
      navigate("/");
    } else {
      setName(user_data.name.split(" ")[0]);
    }
  }, [user_data, navigate]);

  return (
    <div className="feedback-screen">
      <h3>
        ¡Gracias por confirmar tu asistencia <strong>{name} 😊</strong>!
      </h3>
    </div>
  );
}
