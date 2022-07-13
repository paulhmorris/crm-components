import App from "components/App";
import { PepperNav } from "components/Navigation/PepperNav";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComponentDisplay from "routes/components";
import GuestProfile from "routes/guest-profile";
import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="components" element={<ComponentDisplay />} />
        <Route path="guest-profile" element={<GuestProfile />} />
        <Route path="nav" element={<PepperNav />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
