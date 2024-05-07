const baseUrl =
  'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'

export const loadProducts = async () => {
  const res = await fetch(baseUrl)
  return await res.json()
}

export const loadProduct = async (pid) => {
  const res = await fetch(`${baseUrl}/${pid}`)
  return await res.json()
}
