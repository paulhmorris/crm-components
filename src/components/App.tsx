import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="mt-10 p-4 pb-24">
      <nav className="mb-10 flex w-full space-x-4 border-b-2 border-blue-100 pb-2">
        <Link to="/components">Components</Link>
        <Link to="/guest-profile">Guest Profile</Link>
        <Link to="/nav">Pepper Nav</Link>
        <Link to="/jarvis">Jarvis</Link>
        <Link to="/group-profile">Group Profile</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
