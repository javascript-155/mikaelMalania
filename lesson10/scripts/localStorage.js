// local storage in javascript

// add new data to local storage

localStorage.setItem('user', 'Hanry');

// get data from local storage

let user = localStorage.getItem('user');
console.log(user);

// remove data from local storage
localStorage.removeItem('blah');

// clear all data from local storage
// localStorage.clear();

// add new data to session storage
sessionStorage.setItem('cost', '£1000');

// get data from session storage
sessionStorage.getItem('cost');

// remove data from session storage
sessionStorage.removeItem('cost');

// clear all data from session storage
sessionStorage.clear();