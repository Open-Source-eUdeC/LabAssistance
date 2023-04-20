import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
//
import Layout from "./Layout";
import Home from "./views/Home";
import Feedback from "./views/Feedback";
import "./LabAssistance.scss";

const LabAssistance = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Feedback />} />
    </Route>
  )
);

export default LabAssistance;
