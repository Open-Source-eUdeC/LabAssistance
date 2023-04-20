//
import "./index.scss";

export default function Feedback({ user_data }) {
  return (
    <>
      <div className="feedback-screen">
        <h3>
          ¡Gracias por confirmar tu asistencia <strong>{user_data.nombre.split(" ")[0]}</strong>!
        </h3>
      </div>
    </>
  );
}
