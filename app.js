const submit = document.querySelector('.submit');
const input = document.querySelector('.input');
const ul = document.querySelector('ul');
const reset = document.querySelector('.reset');

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
	input.value = '';

	str = '';
});

reset.addEventListener('click', function () {
	for (let k = 0; k < j; k++) {
		ul.children[k].textContent = `Task-${k + 1}`;
		ul.children[k].style.fontSize = '.8rem';
		ul.children[k].style.color = 'hsl(1, 10%, 50%)';
		i = 0;
	}
});

// ul.children[0].textContent = 'aman';

// console.log(input.value);
