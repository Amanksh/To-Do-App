const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');
let str = '';
let j = ul.children.length;
console.log(j);
let i = 0;
console.log(i);

submit.addEventListener('click', function () {
	str = input.value;
	console.log(str);

	ul.children[i].textContent = str;
	ul.children[i].style.fontSize = '1rem';
	ul.children[i].style.color = 'red';
	i++;

	str = '';
});

// ul.children[0].textContent = 'aman';

// console.log(input.value);
