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

// var addItem=document.getElementsByClassName('title');
// console.log(addItem);
// addItem[0].style.fontWeight = 'bold';
// addItem[0].style.color = 'green';

// GET ELEMENTS BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent='hello2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items.style.backgroundColor = 'grey'; //it does not work as the lists are a collection or arrays
//so we can only work through individually..for that we have to for loop instead.

// for(var i=0;i<items.length;i++){
//     items[i].style.backgroundColor='grey';
// }

// items[2].style.backgroundColor = 'green';

// for(let i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

// GET ELEMENTS BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
// li[1].textContent='hello';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'red';
// }

li[4].style.fontWeight ='bold';
li[4].style.color='green';