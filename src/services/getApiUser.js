const getApiUser = (userName) => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then((response) => response.json())
    .then((user) => {
      return {
        avatar_url: user.avatar_url,
        name: user.name,
        url: user.html_url,
        bio: user.bio,
        linkedin: user.blog,
      };
    });
};

export default getApiUser;
