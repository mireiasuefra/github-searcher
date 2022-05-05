import Repository from "./Repository";

function ListRepositories(props) {
  const renderRepositories = () => {
    const repositories = props.repositories;
    const filter = props.filterText;

    const filtered = repositories.filter((oneRepository) => {
      return oneRepository.name
        .toLowerCase()
        .includes(filter.toLocaleLowerCase());
    });

    if (filtered.length > 0) {
      return filtered.map((oneRepository) => {
        return <Repository key={oneRepository.id} repository={oneRepository} />;
      });
    } else {
      return (
        <p className="list-repositories__not-found">
          We have not found the repository
        </p>
      );
    }
  };

  return (
    <section>
      <ul>{renderRepositories()}</ul>
    </section>
  );
}

export default ListRepositories;
