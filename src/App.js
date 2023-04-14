import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainDashboard from "./Views/MainDashboard";
import ClientDetails from "./Views/ClientDetails";
import WorkoutDetails from "./Views/WorkoutDetails";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (

    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/client/:clientId" element={<ClientDetails />} />
        <Route path="client/:clientID/workout/:workoutId" element={<WorkoutDetails />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


