export default {
  hostname: 'https://api.thecatapi.com/v1/',
  timeout: 10000,
  validateStatus: status => status >= 200 && status < 302,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  endpoints: [
    {
      key: 'getCategories',
      url: 'categories',
      method: 'GET',
    },
    {
      key: 'getImages',
      url: 'images/search',
      method: 'GET',
    },
  ],
}
