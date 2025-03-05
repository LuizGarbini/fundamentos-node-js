import http from "node:http";

const server = http.createServer((request, response) => {
  // Desestruturação do method
  const { method, url } = request;

  // Definindo condições para o método GET
  if(method === "GET" && url === "/products") {
    return response.end("Lista de produtos!")
  }

  // Definindo condições para o método POST
  if(method === "POST" && url === "/products") {
    return response.writeHead(201).end("Produto cadastrado!")
  }

  // Caso não entre em nenhum dos ifs acima ele da como rota não encontrada.
  return response.writeHead(404).end("Rota não encontrada");
});

/* Aqui a função fica escutando o servidor */
server.listen(3333);
