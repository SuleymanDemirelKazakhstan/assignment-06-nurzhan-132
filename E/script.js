/* Write your code here */

let elements = tasks.querySelectorAll('div');
for(let i = 0; i<elements.length; i++) {
	let butt = elements[i].querySelector('button');
	butt.addEventListener('click', fun);

	function fun() {
		elements[i].dataset.status = 'done';
	}
}