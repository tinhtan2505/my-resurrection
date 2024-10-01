const domain = "http://localhost:8080/";

export function login(username: string, password: string) {
  const headers: HeadersInit = {
    "Content-Type": "application/json",
  };

  const requestOptions: RequestInit = {
    method: "POST",
    headers: new Headers(headers),
    body: JSON.stringify({ username: username, password: password }),
  };

  console.log(domain + "auth/login");

  return fetch(domain + "auth/login", requestOptions);
}
