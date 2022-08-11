import App from "components/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentDisplay from "routes/components";
import GroupProfile from "routes/group-profile";
import GuestProfile from "routes/guest-profile";
import Jarvis from "routes/jarvis";
import Nav from "routes/nav";
import SampleTablePage from "routes/sample-table";
import { TabManagerProvider } from "./contexts/TabManagerContext";
import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <TabManagerProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="components" element={<ComponentDisplay />} />
          <Route path="guest-profile" element={<GuestProfile />} />
          <Route path="nav" element={<Nav />} />
          <Route path="jarvis" element={<Jarvis />} />
          <Route path="group-profile" element={<GroupProfile />} />
          {/* <Route path="create-submarket" element={<CreateSubmarket />} /> */}
          {/* <Route path="create-subscription" element={<CreateSubscription />} /> */}
          <Route path="sample-table" element={<SampleTablePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </TabManagerProvider>
);
