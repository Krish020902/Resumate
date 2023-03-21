import "./App.css";

import { RouterProvider } from "react-router-dom";
import User from "./components/User";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <RouterProvider router={User} />
      {/* <Dashboard /> */}
    </div>
  );
}

export default App;
