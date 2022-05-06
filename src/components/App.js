import "../styles/App.scss";
import { useEffect, useState } from "react";
import getApiRepositories from "../services/getApiRepositories";
import getApiUser from "../services/getApiUser";
import ListRepositories from "./ListRepositories";
import Filter from "./Filter";
import Header from "./Header";
import User from "./User";

const userName = "mireiasuefra";

function App() {
  const [repositories, setRepositories] = useState([]);
  const [filterText, setFilterText] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    getApiRepositories(userName).then((response) => {
      setRepositories(response);
    });

    getApiUser(userName).then((response) => {
      setUser(response);
    });
  }, []);

  console.log(user);

  return (
    <>
      <Header user={user} />
      <main className="main">
        {user ? <User user={user} /> : null}
        <section>
          <Filter setFilterText={setFilterText} />
          <ListRepositories
            repositories={repositories}
            filterText={filterText}
          />
        </section>
      </main>
    </>
  );
}

export default App;
