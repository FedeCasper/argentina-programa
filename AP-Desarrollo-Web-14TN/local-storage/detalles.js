// console.log(window);
// console.log(location.search);
const locationSearch = location.search
// console.log(locationSearch);

const objetoURL = new URLSearchParams(locationSearch)
// console.log(objetoURL);

const valorDeKeyParam = objetoURL.get('nombre')
// console.log(valorDeKeyParam);

