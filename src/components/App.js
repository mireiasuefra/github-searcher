import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import ListRepositories from "./ListRepositories";

function App() {
  // api

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    callToApi().then((response) => {
      setRepositories(response);
    });
  }, []);

  console.log(repositories);

  return (
    // HTML ✨

    <div>
      <h1>Buscador Repos</h1>

      <ListRepositories repositories={repositories} />
    </div>
  );
}

export default App;
