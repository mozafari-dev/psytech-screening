import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = "http://127.0.0.1:8000/register";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name
  });
}
