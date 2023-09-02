document.addEventListener('DOMContentLoaded', function(){
  const nome = document.getElementById('name');
  const nomeUsuario = document.getElementById('username');
  const avatar = document.getElementById('avatar');
  const repositorios = document.getElementById('repositorios');
  const seguidores = document.getElementById('seguidores');
  const seguindo = document.getElementById('seguindo');
  const linkPerfil = document.getElementById('link');

  fetch('https://api.github.com/users/Ruan-Bertin')
    .then(function(resposta){
        return resposta.json();
    })
    .then(function(json){
      nome.innerText = json.name;
      nomeUsuario.innerText = json.login;
      avatar.src = json.avatar_url;
      seguidores.innerText = json.followers;
      seguindo.innerText = json.following;
      repositorios.innerText = json.public_repos;
      linkPerfil.href = json.html_url;
    })
})