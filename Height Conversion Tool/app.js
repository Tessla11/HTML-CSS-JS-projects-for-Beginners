const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    //grab content from feet input
let feet = document.querySelector('#feet');
let inches = document.querySelector('#inches');
const results = document.querySelector('#results');
    e.preventDefault();