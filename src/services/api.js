const callToApi = () => {
  return fetch("https://api.github.com/users/mireiasuefra/repos")
    .then((response) => response.json())
    .then((data) => {
      return data.map((repo) => {
        return {
          id: repo.id,
          name: repo.name,
          description: repo.description,
        };
      });
    });
};

export default callToApi;


