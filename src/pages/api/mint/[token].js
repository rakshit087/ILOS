import axiosS from "axios";

export default async function handler(req, res) {
  const { token } = req.query;

  const axios = axiosS.create({
    baseURL: "https://api.github.com/graphql",
    headers: {
      Authorization: `token ${token}`,
    },
  });
  try {
    //get the user's github username
    const user = await axios.post("", {
      query: `
        query {
          viewer {
            login
          }
        }
      `,
    });
    //get the user's github stats sorted by stargazers
    const stats = await axios.post("", {
      query: `
        query {
          viewer {
            repositories(first: 100, orderBy: {field: STARGAZERS, direction: DESC}) {
              nodes {
                name
                stargazers {
                  totalCount
                }
              }
            }
          }
        }
      `,
    });
    //find sum of all stargazers
    const totalStars = stats.data.data.viewer.repositories.nodes.reduce(
      (acc, repo) => acc + repo.stargazers.totalCount,
      0
    );
    res.status(200).json({
      user: user.data.data.viewer.login,
      stargazers: totalStars,
      ilos: Math.SQRT2(totalStars),
    });
  } catch (error) {
    res.status(401).send({
      stars: 0,
      ilos: 0,
    });
  }
}
