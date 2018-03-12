$(document).ready(function(){
	//variables
	var serialNo = 0;
	var addInput = $('#add-form input');
	var addButton = $('#add-form button');
	var taskBody = $('.task-body div');

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
	$(firstLi).text(serialNo);
	$(secondLi).append(secondElement);
	$(thirdLi).append(thirdElement);

	tasks.append(firstLi);
	tasks.append(secondLi);
	tasks.append(thirdLi);
	taskBody.append(tasks);


	//add classes
	$(tasks).addClass('task');

});


});
