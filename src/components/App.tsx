import { TabProvider } from "contexts/TabContext";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TabSelection from "./TabSelection";

function App() {
  return (
    <TabProvider>
      <div className="mt-10 p-4 pb-24">
        <TabSelection />
        <Navbar />
        <Outlet />
        <Toaster position="top-center" />
      </div>
    </TabProvider>
  );
}

export default App;
