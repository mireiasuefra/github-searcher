const getApiRepositories = () => {
  return fetch("https://api.github.com/users/mireiasuefra/repos")
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
        };
      });
    });
};

export default getApiRepositories;

//TODO: añadir url publica 


