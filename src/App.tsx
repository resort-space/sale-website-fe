import { Button } from "@mui/material";
import { useColorMode } from "./context/color-mode-context";
import Home from "./apps/pages/home/home";

function App() {
  const { toggleColorMode, mode } = useColorMode();

  return (
    <div style={{ padding: 32 }}>
      <h1>Hello {mode === "light" ? "Light" : "Dark"} Mode!</h1>
      <Button variant="contained" onClick={toggleColorMode}>
        Toggle Theme
      </Button>
      <Home />
    </div>
  );
}

export default App;
