let apiUrl;

switch (process.env.NODE_ENV) {
  case 'production':
    apiUrl = 'https://bostonpatios.herokuapp.com'
    break;
  default:
    apiUrl = 'http://localhost:3000'
}

export default apiUrl;
