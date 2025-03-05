import http from "node:http";

const server = http.createServer(async (request, response) => {
  // Desestruturação do method
  const { method, url } = request;

  // Definindo condições para o método GET
  if(method === "GET" && url === "/products") {
    return response.end("Lista de produtos!")
  }

  // Definindo condições para o método POST
  if(method === "POST" && url === "/products") {
    const buffers = []

    for await (const chunk of request){
      buffers.push(chunk)
    }

    console.log(Buffer.concat(buffers).toString())

    return response.writeHead(201).end("Produto cadastrado!")
  }

  // Caso não entre em nenhum dos ifs acima ele da como rota não encontrada.
  return response.writeHead(404).end("Rota não encontrada");
});

/* Aqui a função fica escutando o servidor */
server.listen(3333);
