export function getPost(id: any) {
  return fetch(
    `https://localhost:7136/Post/GetPostById?id=` + id
  ).then((data) => data.json());
}

export function getPosts() {
  return fetch('https://localhost:7136/Post/GetPosts').then((data) =>
    data.json()
  );
}

export function findPost(keyword: string) {
  return fetch(
    'https://localhost:7136/Post/Search?keyword=' + keyword
  ).then((data) => data.json());
}
