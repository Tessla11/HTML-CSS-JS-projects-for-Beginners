//Selection items from the DOM
//Add items container
const addItemsAction = document.querySelector('.addItems-action');
const input = document.querySelector('.addItems-input');
const submit = document.querySelector('.addItems-submit');

//Display items container
const list = document.querySelector('.grocery-list');
const displayItemsAction = document.querySelector('.displayItems-action');
const clear = document.querySelector('.displayItems-clear');


//Add event listeners
//Submit listener
submit.addEventListener('click', addItem);
//Check for local storage
document.addEventListener('DOMContentLoaded', displayStorage);
//Clear list
clear.addEventListener('click', removeItems);
//Listen to list to delete individual items
list.addEventListener('click', removeSingleItem);