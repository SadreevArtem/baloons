import { CategoryName } from "../components/Products/static";

class API {
  baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  signInRequest = (input: { username: string; password: string }) =>
    fetch(`${this.baseUrl}/signin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    });
  getProducts = (category: CategoryName) => {
    console.log(category);
    
    return fetch(
      `${this.baseUrl}/products/category/${category}`
    )
      .then((res) => res.json())
      .then((data) => data.products);
  }
}

export const api = new API('http://localhost:4000')