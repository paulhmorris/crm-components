import { QueryClient, QueryClientProvider } from "react-query";
import { Link, Outlet } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mt-10">
        <nav className="mb-10 flex w-full space-x-4 border-b-2 border-blue-100 pb-2">
          <Link to="/components">Components</Link>
          <Link to="/guest-profile">Guest Profile</Link>
          <Link to="/nav">Navigation</Link>
          <Link to="/group-profile">Group Profile</Link>
        </nav>
        <Outlet />
      </div>
    </QueryClientProvider>
  );
}

export default App;
