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
// var li = document.getElementsByTagName('li');
// console.log(li);
// li[1].textContent='hello';
// li[1].style.fontWeight='bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i=0;i<li.length;i++){
//     li[i].style.backgroundColor = 'red';
// }

// li[4].style.fontWeight ='bold';
// li[4].style.color='green';

// QUERY SELECTOR
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px red';

// var input = document.querySelector('input');
// input.value="hello world"; //although it has two inputs it always select the first one as input

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "send";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color="green";

var secondItem = document.querySelector('.list-group-item:nth-child(2');
// secondItem.style.color='coral';
secondItem.style.backgroundColor="green";
var listItemToHide = document.querySelector('.list-group-item:nth-child(2)');

// Set the display property to 'none' to make it invisible
listItemToHide.style.display = 'none';
// these all are css pseudo selectors

// QUERY SELECTOR ALL
// SIMILAR TO GETELEMENTBYCLASS OR TAG NAME..GONNA GRAB MORE THAN ONE THING
// var titles = document.querySelectorAll('.title');
// console.log(titles); //can use array functions
// titles[0].textContent="nice";

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = "red";
//     even[i].style.backgroundColor = "pink";

// }
