
let node = document.getElementById('node_ok');
let newNode = document.createElement('p');
// newNode.Color('blue');
newNode.appendChild(document.createTextNode('some HTML'));
node.appendChild(newNode);

console.log(node);
console.log(newNode);

let div1 = document.getElementById('div1');
let div2 = document.createElement('header');
div2.appendChild(document.createTextNode('This is a test'));
div1.appendChild(div2);
// for(let i =0; i < 5; i++){
// 	node.parentNode.insertBefore(document.createElement('div'));
// 	console.log(div1);
// }
let tags = document.getElementById('html_tags');
let submit = document.getElementById('submit');
const empty = () => {
	let x = document.getElementById("feedback").value;
	if(x === ""){
		let test = document.getElementById('test');
		test.innerHTML = document.write ='<h1> Hello</h1>';
		return false;

	}
}


submit.addEventListener('click', empty);
console.log(submit);
console.log()