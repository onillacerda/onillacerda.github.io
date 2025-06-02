const repoList = document.getElementById("repo-list");
const githubUsername = "onillacerda"; 

fetch(`https://api.github.com/users/${githubUsername}/repos`)
  .then(res => res.json())
  .then(repos => {
    repos.slice(0, 6).forEach(repo => {
      const card = document.createElement("div");
      card.className = "bg-white p-4 rounded-xl shadow";
      card.innerHTML = `
        <h3 class="font-bold text-lg">${repo.name}</h3>
        <p class="text-sm text-gray-600">${repo.description || "Sem descrição"}</p>
        <a href="${repo.html_url}" target="_blank" class="text-blue-500 text-sm">Ver no GitHub</a>
      `;
      repoList.appendChild(card);
    });
  });