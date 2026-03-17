import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030", // correto é colocar no .env, porém estou colocando aqui para facilitar os testes para o aprendizado
});

export default api;