const post = (url, body) => fetch(url, {
  method: 'POST',
  credentials: 'include',
  body: JSON.stringify(body || {}),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}).then(res => res.json());
