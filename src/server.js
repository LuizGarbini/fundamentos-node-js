import http from "node:http";

const server = http.createServer((request, response) => {
  // Desestruturação do method
  const { method } = request;

  return response.writeHead(200).end("Método: " + method);
});

/* Aqui a função fica escutando o servidor */
server.listen(3333);
