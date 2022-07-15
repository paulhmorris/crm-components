import App from "components/App";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentDisplay from "routes/components";
import GroupProfile from "routes/group-profile";
import GuestProfile from "routes/guest-profile";
import Nav from "routes/nav";
import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="components" element={<ComponentDisplay />} />
        <Route path="guest-profile" element={<GuestProfile />} />
        <Route path="nav" element={<Nav />} />
        <Route path="group-profile" element={<GroupProfile />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
