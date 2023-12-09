import { useEffect, useState } from "react";
import ConfettiComponent from "./components/ConfettiComponent";
import Home from "./pages/Home";

function App() {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showConfetti && <ConfettiComponent />}
      <Home />
    </>
  );
}

export default App;
