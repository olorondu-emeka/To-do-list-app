$(document).ready(function(){
	//variables
	var addInput = $('#add-form input');
	var addButton = $('#add-form button');
	var taskBody = $('.task-body div');
	var buttonContainer = $('.task-body action')
//********Event for addButton**********
addButton.on("click", function(e){
	e.preventDefault();
//create new <ul> and <li> tags
	var tasks = document.createElement('ul');
	var firstLi = document.createElement('li');
	var secondLi = document.createElement('li');
	var thirdLi = document.createElement('li');

	//append child elements
	var secondElement = "<p>" + addInput.val() + "</p>";
	secondElement += "<input type='checkbox'>";
	var thirdElement = "<button><span class='fa fa-edit'></span> Edit</button><button><span class='fa fa-trash'></span> Delete</button>";

	$(secondLi).append(secondElement);
	$(thirdLi).append(thirdElement);

	tasks.append(firstLi);
	tasks.append(secondLi);
	tasks.append(thirdLi);
	taskBody.append(tasks);

	//add classes
	$(tasks).addClass('task');
	$(thirdLi).addClass('action');
	$(firstLi).addClass('serial-no');
	addInput.val("");  //clears addInput box

	var delButton = $('.action button:last-of-type');
	var editButton = $('.action button:first-of-type');
	delButton.addClass('delete');
	editButton.addClass('edit');

	//input serial numbers
	var serialNo = $('.task').length;
	$(firstLi).text(serialNo);


});//end addButton event listener

//********Event for delete button*******
taskBody.on('click', function(e){
	if(e.target.className == 'delete'){
		var parent = $(e.target).parents('.task');
		var nextIndex = parent.index();
		var nextSibling = parent.next();
		var tasks = $('.task');
		var taskLength = $('.task').length;

		//update serial numbers
		for (var i = (nextIndex - 1); i < taskLength - 1; i++) {
			$(tasks[i]).next().children('.serial-no').text(nextIndex);
			nextIndex++;
		}

		//delete element
		parent.remove();

	}

	//Event handler for edit button
	if (e.target.className == 'edit'){
		var editBox = "<input type='text' style='padding: 1px'>";
		var doneButton = "<button class='done'><span class='fa fa-check'></span> Done</button>";
		var editLi = $(e.target).parents('.task').children('.serial-no').next();
		var doneDesc = "<span class='fa fa-check'></span>";
		var buttonSpan = $(e.target).children('span');

		editLi.children('p').hide();
		editLi.prepend(editBox);
		$(e.target).parent().prepend(doneButton);
		$(e.target).parent().children('.edit').remove();


	}

//event handler for done button
if (e.target.className == 'done'){
console.log('doneee');
	var editLi = $(e.target).parents('.task').children('.serial-no').next();
	var editInput = editLi.children("input[type='text']");
	var editValue = editInput.val();
	var editButton = "<button class='edit'><span class='fa fa-edit'></span> Edit</button>"

	editInput.hide();
	editLi.children('p').show().text(editValue);
	//remove done button and replace with edit button
	$(e.target).parent().prepend(editButton);
	$(e.target).parent().children('.done').remove();

}

});//end taskBody event handler






});
