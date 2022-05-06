const getApiRepositories = (userName) => {
  return fetch(`https://api.github.com/users/${userName}/repos`)
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
