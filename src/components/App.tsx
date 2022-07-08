import { QueryClient, QueryClientProvider } from "react-query";
import { ComponentDisplay } from "./ComponentDisplay";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto mt-20 flex max-w-xl flex-col items-start p-4">
        <ComponentDisplay />
        {/* Disabled for now */}
        {/* <Submarkets /> */}
      </div>
    </QueryClientProvider>
  );
}

export default App;
