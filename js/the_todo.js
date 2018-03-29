$(document).ready(function(){
	//variables
	var addInput = $('#add-form input');
	var addButton = $('#add-form button');
	var taskBody = $('.task-body div');
	var buttonContainer = $('.task-body action');
	var clearTasks = $('.clear-tasks');
	var manageTask = $('#manage-tasks');

//function for updating serial number
	function updateSN(taskArray, nextInd, taskLen){
		for (var i = (nextInd - 1); i < taskLen - 1; i++) {
			$(taskArray[i]).next().children('.serial-no').text(nextInd);
			nextInd++;
		}
	}

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
	secondElement += "<input type='checkbox' class='check'>";
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

		//update serial numbers and delete element
		updateSN(tasks, nextIndex, taskLength);
		parent.remove();

	}

	//Event handler for edit button
	if (e.target.className == 'edit'){
		var editBox = "<input type='text' class='edit-content' style='padding: 1px 5px'>";
		var doneButton = "<button class='done'><span class='fa fa-check'></span> Done</button>";
		var editLi = $(e.target).parents('.task').children('.serial-no').next();
		var paragraph = editLi.children('p');
		var doneDesc = "<span class='fa fa-check'></span>";
		var buttonSpan = $(e.target).children('span');

		//get content of paragraph, hide paragraph and add edit box
		var content = paragraph.text();
		paragraph.hide();
		editLi.prepend(editBox);
		$('.edit-content').val(content);
		$(e.target).parent().prepend(doneButton);
		$(e.target).parent().children('.edit').remove();

	}

//event handler for done button
if (e.target.className == 'done'){

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


//clear button event handler
clearTasks.on('click', function(e){
	e.preventDefault();
	var checkBoxes = document.querySelectorAll("input[type='checkbox']");


	checkBoxes.forEach(function(checkbox){
		if (checkbox.checked == true){
			var tasks = $('.task');
			var taskLength = $('.task').length;
			var parent = $(checkbox).parents('.task');
			var nextIndex = parent.index();

			//update serial numbers and delete element
			updateSN(tasks, nextIndex, taskLength);
			parent.remove();

		}
	});//end forEach function
});//end clear button event handler

//fade animation
manageTask.on('click', function(e){
	if (e.target.className == 'check'){

	}
});



});
