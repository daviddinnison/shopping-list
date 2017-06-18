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

//STEP TWO -------- STATE MODIFICATION FUNCTIONS
//create functions for adding/removing from state
function addsItemToState (state, item) {
	let itemObj = {
		name: item, checked: false
	}
	state.items.push(itemObj);
	rendersItems(state, $('.shopping-list'));
}

	//check button function
function checkItem(state, targetItem) {
	let id = targetItem.data("itemindex");
	state.items[id].checked = !state.items[id].checked;
	rendersItems(state, $('.shopping-list'));
}

function deleteItem(state, targetItem) {
	let id = targetItem.data("itemindex");
	state.items.splice(id, 1);
	rendersItems(state, $('.shopping-list'));
}


//STEP THREE ---------- RENDER FUNCTION HANDLING

function rendersItems(state,element) {
	let itemsArray = state.items.map(function(item, i) {
		//checks for item true or false
		let checkCondition = item.checked;

		return (`
			<li data-itemindex="${i}">
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
}

//STEP FOUR -------- USER ACTIONS HANDLING
//listen for form submission click and text entered
function submitsForm(){
	$('#js-shopping-list-form').on('submit', function(event){
	event.preventDefault();

	//store form text in variable
	let userInput = $('#shopping-list-entry').val();
	addsItemToState(initialState, userInput);

	//Reset input field after form submission
	$('#shopping-list-entry').val('');
	});
}
 
function checkItemListen() {
		$('.shopping-list').on('click', '.shopping-item-toggle',function(event) {
		let targetItem = $(this).closest('li');
		checkItem(initialState, targetItem);
	});
}

function deleteItemListen() {
		$('.shopping-list').on('click','.shopping-item-delete', function(event) {
		let targetItem = $(this).closest('li');
		deleteItem(initialState, targetItem);
	});
}



//STEP FIVE ------ INTIALIZE IT
//doc ready w/render function
$(function (){
	rendersItems(initialState, $('.shopping-list'));
	checkItemListen();
	deleteItemListen();
	submitsForm();

}) 
