export async function jsonBodyHandler(request, response){
  // Adicionando os chunks abaixo em um array
  const buffers = []

  // Pegando o body da requisição em pedaços (chunks)
  for await (const chunk of request){
    buffers.push(chunk)
  }

  try {
    // Concatena os chunks e converte para string. Em seguida, converte a string para JSON
    request.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    request.body = null
  }

  // setando que o tipo de conteudo recebido no body é JSON.
  response.setHeader("Content-Type", "application/json")
}