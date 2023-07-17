// // console.dir(document);

// // EXAMINE THE DOCUMENT OBJECT
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// // document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent="Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.forms[0]);
// console.log(document.images);

// GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText="GoodBye";
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';

// headerTitle.style.borderBottom='solid 3px #000'

// var header=document.getElementById('main-header');
// header.style.borderBottom = 'solid 3px #000';

var addItem=document.getElementsByClassName('title');
console.log(addItem);
addItem[0].style.fontWeight = 'bold';
addItem[0].style.color = 'green';