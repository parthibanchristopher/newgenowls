import { BrowserRouter, Route, Routes } from "react-router-dom";

import MainDashboard from "./Views/MainDashboard";
import ClientDetails from "./Views/ClientDetails";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/client/:id" element={<ClientDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


