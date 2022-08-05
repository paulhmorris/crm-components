import TabSelection from "./TabSelection";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mt-10 p-4 pb-24">
      <TabSelection />
      <Navbar />
      <Outlet />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
