import { QueryClient, QueryClientProvider } from "react-query";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import TabSelection from "./TabSelection";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto mt-10 max-w-[820px] p-4">
        <TabSelection />
        <Navbar />
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
