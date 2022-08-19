import { TabProvider } from "contexts/TabContext";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TabSelection from "./TabSelection";

function App() {
  return (
    <div className="mt-10 pb-24">
      <TabProvider>
        <TabSelection />
        <Navbar />
      </TabProvider>
      <Outlet />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
