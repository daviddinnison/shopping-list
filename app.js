//input initial state and whatever is inputted --- to do items
//outputting to do items in DOM



// STEP ONE ------- DESIGN STATE
//set state to current contents for .shopping-list
//set var for text names and checkeded true or false in object

let initialState = { 
	items: [
		{ name:"apples", checked: false},
		{ name:"oranges", checked: false},
		{ name:"milk", checked: false},
		{ name:"bread", checked: false}
	]
};

// console.log(initialState);

//STEP TWO -------- STATE MODIFICATION FUNCTIONS
//create functions for adding/removing from state
function addsItemToState (state, item) {
	//console.log(state.items);
	let itemObj = {
		name: item, checked: false
	}
	state.items.push(itemObj);

	rendersItems(state, $('.shopping-list'));
}

	//check button function
function checkItem(state, index) {
	state.items[index].checked = !state.items[index].checked;
	rendersItems(state, $('.shopping-list'));
}

function deleteItem(state, index) {
	state.items.splice(index, 1);
	rendersItems(state, $('.shopping-list'));
}




//STEP THREE ---------- RENDER FUNCTION HANDLING
//pushing state into DOM via append

function rendersItems(state,element) {
//create box with text entered
// Loop thing let createsItemsArray = state.items.map()
	//make template 
	let itemsArray = state.items.map(function(item, i) {

		//checks for item true or false
		let checkCondition = item.checked;

		return (`
			<li data-index="${i}">
			<span class="shopping-item ${checkCondition ? 'shopping-item__checked' : null}">${item.name}</span> 
	        <div class="shopping-item-controls">
	          <button class="shopping-item-toggle">
	            <span class="button-label">check</span>
	          </button>
	          <button class="shopping-item-delete">
	            <span class="button-label">delete</span>
	          </button>
	        </div>
	      </li>`)
	});

   //append to dom
   element.html(itemsArray);
   // console.log(itemsArray);
}
//STEP FOUR -------- USER ACTIONS HANDLING
//listen for form submission click and text entered
function submitsForm(){
	$('#js-shopping-list-form').submit(function(event){
	event.preventDefault();
	//store form text in variable
	let userInput = $('#shopping-list-entry').val();
	// console.log(userInput);
	addsItemToState(initialState, userInput);

	//Make user input field blank after submission
	// $('#js-shopping-list-form').reset();
	});
}

//add check functioniality via class removal/adding 
function checkItemListen() {
	$('.shopping-item-toggle').click(function(event) {
		// let targetItem = $('.shopping-item-toggle').closest('[attribute="data-index"]');
		//let targetItem = $('.shopping-item-toggle').closest('[attribute="data-index"]');
		//let index = parseInt(targetItem).getAttribute("data-index");
		let targetItem = $('.shopping-item-toggle').parents(('[attribute="data-index"]'));
		console.log("my index: " + targetItem);
		console.log(targetItem);
		checkItem(initialState, targetItem);
	});
}

//<li data-index="${i}">



//add delete functionality (how?)




//STEP FIVE ------ INTIALIZE IT
//doc ready w/render function
$(function (){
	rendersItems(initialState, $('.shopping-list'));
	submitsForm();
	checkItemListen();
}) 
