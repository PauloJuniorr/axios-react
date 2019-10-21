var axios = require("axios");
var dados;

// enviar dados para uma variável, a partir de uma requisição
function usuarioGitHub(){
    return axios.get("https://api.github.com/users/PauloJuniorr")
}

dados = usuarioGitHub();

dados.then(function(resposta){
    console.log(resposta.data);
}).catch(function(error){
    if(error){
        console.log(error);
    }
})

/* axios.get("https://api.github.com/users/PauloJuniorr").then(function(resposta){
    console.log(resposta.data);
    // console.log(resposta.status);
    // console.log(resposta.headers);
    // console.log(resposta.params);
}).catch(function(error) {
    if(error) {
        console.log(error)
    
    }
}); */

/* axios.post("https://jsonplaceholder.typicode.com/posts").then(function(resposta) {
    console.log(resposta.data);
}) */

// passar dados dentro de um post
/* axios.post("https://minha.api.io/registrar/usuario", {email: "meuemail@email.com", senha: "123456"}) */