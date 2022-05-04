import "../styles/App.scss";
import { useEffect, useState } from "react";
import callToApi from "../services/api";
import ListRepositories from "./ListRepositories";
import Filter from "./Filter";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    callToApi().then((response) => {
      setRepositories(response);
    });
  }, []);

  const handleFilterText = (ev) => {
    setFilterText(ev.currentTarget.value);
  };

  

  return (
    // HTML ✨

    <>
      <header>
        <h1>Buscador Repos</h1>
      </header>
      <main>
        <Filter
          handleFilterText={handleFilterText}
        />
        <ListRepositories 
        repositories={repositories} 
        filterText={filterText}
        />
      </main>
    </>
  );
}

export default App;
