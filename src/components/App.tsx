import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Topbar from "./Topbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto mt-10 max-w-[820px] p-4">
        <Topbar />
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
