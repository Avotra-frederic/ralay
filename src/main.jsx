import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "aos/dist/aos.css";
import { ChakraProvider } from "@chakra-ui/react";
import Loading from "./components/loading/Loading.jsx";

// eslint-disable-next-line react-refresh/only-export-components
function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Écouter l'événement load pour le chargement initial de la page
    window.addEventListener("load", () => {
      setIsLoading(false);
    });
  }, []);

  // Affiche le composant App si isLoading est false, sinon affiche le préchargeur
  return (
    <React.StrictMode>
      <ChakraProvider>
        {isLoading ? <Loading /> : <App />}
      </ChakraProvider>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);
