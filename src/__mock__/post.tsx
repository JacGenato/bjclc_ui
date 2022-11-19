export function getPost() {
  return fetch('https://localhost:7136/Post/GetPostById?id=1').then((data) =>
    data.json()
  );
}

export function getPosts() {
  return fetch('https://localhost:7136/Post/GetPosts').then((data) =>
    data.json()
  );
}
