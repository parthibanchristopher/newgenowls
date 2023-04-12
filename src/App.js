import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainDashboard from "./Views/MainDashboard";
import ClientDetails from "./Views/ClientDetails";
import { NavigationBar } from "./Components/NavigationBar";

function App() {
  return (

    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/client/:id" element={<ClientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


