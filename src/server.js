import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Sucesso")
});


/* Aqui a função fica escutando o servidor */
server.listen(3333)