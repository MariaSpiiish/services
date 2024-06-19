function handleResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

export function getPosts() {
    return fetch('https://jsonplaceholder.typicode.com/posts?id=1&id=2&id=3&id=4&id=5&id=6&id=7&id=8', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
    })
    .then(handleResponse);
} 