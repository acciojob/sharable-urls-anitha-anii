// your code here
 
  let sbutton = document.getElementById('button');
  let nvalue = document.getElementById('name');
  let yvalue = document.getElementById('year');
   let h3el = document.getElementById('url');

sbutton.addEventListener('click',()=>{
	let valuename =nvalue.value; 
	let valueyear =yvalue.value; 
	let valueh3 = h3el.innerText;
	 h3el.innerText = `${valueh3}?name=${valuename}&year=${valueyear}`;

	
});