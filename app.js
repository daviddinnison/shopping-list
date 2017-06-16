//input initial state and whatever is inputted --- to do items
//outputting to do items in DOM



// STEP ONE ------- DESIGN STATE
//set state to current contents for .shopping-list
//set var for text names and checkeded true or false in object

let initialState = { 
	items: [
		{ name:"apples", checked: false},
		{ name:"oranges", checked: false},
		{ name:"milk", checked: true},
		{ name:"bread", checked: false}
	]
};

// console.log(initialState);

//STEP TWO -------- STATE MODIFICATION FUNCTIONS
//create functions for adding/removing from state
//



//STEP THREE ---------- RENDER FUNCTION HANDLING
//pushing state into DOM via append

//renderfunction
function rendersItems(state) {
//create box with text entered

	//make template 
	let template = (`
		<li>
		<span class="shopping-item">${state.items.name}</span> 
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`)
      

 alert(template);
}
//STEP FOUR -------- USER ACTIONS HANDLING
//listen for form submission click and text entered
function submitsForm(){
	$('#js-shopping-list-form').submit(function(event){
	//store form text in variable
	let userInput = $('#shopping-list-entry').val();
	console.log(userInput);
	});
}

//add check functioniality via class removal/adding 
//add delete functionality (how?)




//STEP FIVE ------ INTIALIZE IT
//doc ready w/render function
$(function (){
	rendersItems(initialState);
	submitsForm();
}) 
