//
import Profile from "./components/Profile";
import Assistance from "./components/Assistance";
import logo from "../../assets/logo.png";
import lab_data from "../../data/lab.json";
import "./index.scss";

export default function Home() {
  return (
    <main>
      <Profile profile_logo={logo} data={lab_data} />
      <Assistance lab_data={lab_data} />
    </main>
  );
}
