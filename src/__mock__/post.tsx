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

export function createPost(param: object) {
  return fetch('https://localhost:7136/Post/Create', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(param), // body data type must match "Content-Type" header
  });
}
