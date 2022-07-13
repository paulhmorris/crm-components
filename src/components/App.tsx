import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto mt-10 max-w-[820px] p-4">
        <nav className="mb-10 flex w-full space-x-4 border-b-2 border-gray-300 pb-2">
          <Link to="/components">Components</Link>
          <Link to="/guest-profile">Guest Profile</Link>
        </nav>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
