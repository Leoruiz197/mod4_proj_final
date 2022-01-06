fetch("https://mod4-proj-final.herokuapp.com/lista")
.then((resp) => resp.json())
  .then(function(data) {
    console.log("Resposta da API", data)
  }).catch(function(error) {
  console.log(error);
});