import { QueryClient, QueryClientProvider } from "react-query";
import { ComponentDisplay } from "./ComponentDisplay";
import { Submarkets } from "./Submarkets";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="mx-auto flex max-w-xl flex-col items-start space-y-8 p-4">
        <ComponentDisplay />
        <Submarkets />
      </div>
    </QueryClientProvider>
  );
}

export default App;
