//
import "./index.scss";

export default function Profile({ profile_logo, data }) {
  return (
    <section id="Profile">
      <img
        src={profile_logo}
        alt={data.name}
      />
      <h1>Asistencia {data.name}</h1>
    </section>
  );
}
