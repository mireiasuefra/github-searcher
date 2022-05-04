import Repository from "./Repository";

function ListRepositories(props) {
  const renderRepositories = () => {
    const repositories = props.repositories;

    if (repositories.length > 0) {
      return repositories.map((oneRepository, index) => {
        return <Repository key={index} repository={oneRepository} />;
      });
    } else {
      return (
        <p className="list-repositories__not-found">
          No hemos encontrado este repositorio.
        </p>
      );
    }
  };

  return (
    <section className="list-repositories">
      <ul className="list-repositories__list">{renderRepositories()}</ul>
    </section>
  );
}

export default ListRepositories;
