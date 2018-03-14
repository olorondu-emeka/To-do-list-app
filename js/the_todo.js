$(document).ready(function(){
	//variables
	var addInput = $('#add-form input');
	var addButton = $('#add-form button');
	var taskBody = $('.task-body div');

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
	addInput.val("");
	var delButton = $('.action button:last-of-type');
	delButton.addClass('delete');

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
});



});
