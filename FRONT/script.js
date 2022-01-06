const ul = document.getElementById('lista');

fetch("http://localhost:3000/listaobj")
.then((resp) => resp.json())
  .then(function(data) {
    const filmes = data;
    console.log(data);
    return filmes.map(function(filme) {
      const li = document.createElement("li");

      const span = document.createElement('span');
      span.innerHTML = `${filme.nome} - ${filme.email} - ${filme.idade}`;
      
      li.appendChild(span);
      ul.appendChild(li);
    })
}).catch(function(error) {
  console.log(error);
});