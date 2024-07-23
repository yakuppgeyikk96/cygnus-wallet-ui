import "./App.css";
import { Button } from "./components/ui/button";
import useWallet from "./hooks/useWallet";

function App() {
  const { createWallet } = useWallet();

  return (
    <div className="bg-slate-900 h-svh">
      <Button variant="secondary" onClick={createWallet}>
        Create new wallet
      </Button>
      <Button>Import an existing one</Button>
    </div>
  );
}

export default App;
