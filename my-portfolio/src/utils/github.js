const GITHUB_USERNAME = "Mastanvali9347";

export const fetchGithubStats = async () => {
  try {
    const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
    const userData = await userResponse.json();

    const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`);
    const reposData = await reposResponse.json();

    // Calculate distributions
    const languages = {};
    reposData.forEach(repo => {
      if (repo.language) {
        languages[repo.language] = (languages[repo.language] || 0) + 1;
      }
    });

    const totalReposWithLang = Object.values(languages).reduce((a, b) => a + b, 0);
    const langDistribution = Object.entries(languages).map(([name, count]) => ({
      name,
      percent: Math.round((count / totalReposWithLang) * 100),
      color: name === "JavaScript" ? "bg-yellow-400" : name === "Python" ? "bg-blue-500" : name === "HTML" ? "bg-orange-500" : "bg-gray-500"
    })).sort((a, b) => b.percent - a.percent);

    return {
      publicRepos: userData.public_repos,
      followers: userData.followers,
      starredCount: reposData.reduce((acc, repo) => acc + repo.stargazers_count, 0),
      langDistribution: langDistribution.slice(0, 4),
      recentRepos: reposData
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        .slice(0, 4)
        .map(repo => repo.name)
    };
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    return null;
  }
};
