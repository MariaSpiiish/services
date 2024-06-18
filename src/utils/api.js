function handleResponse(res) {
    if(res.ok) {
        return res.json();
    }
    return Promise.reject(res);
}

export function getPost(id) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          }
    })
    .then(handleResponse);
} 