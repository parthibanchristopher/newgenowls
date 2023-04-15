import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainDashboard from "./Views/MainDashboard";
import ClientDetails from "./Views/ClientDetails";
import WorkoutDetails from "./Views/WorkoutDetails";
import AddWorkout from "./Views/AddWorkout";
import UpdateWorkout from "./Views/UpdateWorkout";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (

    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/client/:clientId" element={<ClientDetails />} />
        <Route path="workout/:workoutId" element={<WorkoutDetails />} />
        <Route path="/addWorkout" element={<AddWorkout />} />
        <Route path="/workout/:workoutId/edit" element={<UpdateWorkout />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;


