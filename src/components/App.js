import "../styles/App.scss";
import { useEffect, useState } from "react";
import getApiRepositories from "../services/getApiRepositories";
import ListRepositories from "./ListRepositories";
import Filter from "./Filter";
import Header from "./Header";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    getApiRepositories().then((response) => {
      setRepositories(response);
    });
  }, []);

  return (
    <>
      <Header/>
      <main className="main">
        <Filter setFilterText={setFilterText} />
        <ListRepositories repositories={repositories} filterText={filterText} />
      </main>
    </>
  );
}

export default App;
