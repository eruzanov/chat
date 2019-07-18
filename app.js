(function bootstrap() {
  const API = "https://jsonplaceholder.typicode.com";
  const queries = new Array(10).fill(true).map((_, i) => {
    const url = `${API}/todos/${++i}`;
    return fetch(url)
      .then(resp => resp.json())
      .then(data => ({[url]: data}))
  });
  Promise.all(queries)
    .then(console.log)
    .catch(console.log);
})();
