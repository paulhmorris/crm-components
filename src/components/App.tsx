import { TabManagerProvider } from "contexts/TabManagerContext";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TabSelection from "./TabSelection";

function App() {
  return (
    <TabManagerProvider>
      <div className="mt-10 p-4 pb-24">
        <TabSelection />
        <Navbar />
        <Outlet />
        <Toaster position="top-center" />
      </div>
    </TabManagerProvider>
  );
}

export default App;
