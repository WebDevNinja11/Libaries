//h1-6
function h1(textContent){
	let h1 = document.createElement("h1");
	h1.textContent = textContent

	return h1
}
function h2(textContent){
	let h2 = document.createElement("h2");
	h2.textContent = textContent

	return h2
}
function h3(textContent){
	let h3 = document.createElement("h3");
	h3.textContent = textContent

	return h3
}
function h4(textContent){
	let h4 = document.createElement("h4");
	h4.textContent = textContent

	return h4
}
function h5(textContent){
	let h5 = document.createElement("h5");
	h5.textContent = textContent

	return h5
}
function h6(textContent){
	let h6 = document.createElement("h6");
	h6.textContent = textContent

	return h6
}
//Div,Span,Selection,Main,ul & Li
function Div(){
	let Div = document.createElement('div')
	return Div
}
function Span(){
	let Span = document.createElement('span')
	return Span
}
function ul(...elements){
	let ul = document.createElement('ul')
	for(let i = 0; i < elements.length; i++){
       ul.appendChild(elements[i])
	}
	return ul
}
function Main(){
	let main = document.createElement('main');
	return main
}
function Section(){
	let section = document.createElement('section')
	return section
}
function li(){
	let list = document.createElement('li');
	return list
}
//Appending Elements
function appendElementToBody(...elements){
	for(let i = 0; i < elements.length; i++){
		document.body.appendChild(elements[i])
	}
}
function appendElementToSelectedElement(selectedelement,...elements){
	for(let i = 0; i < elements.length; i++){
		selectedelement.appendChild(elements[i])
	}
}
