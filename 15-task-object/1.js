const ToDoList = {
	tasks: [{
		title: 'Помыть посуду', 
		id: 1, 
		priority: 1,
	}],

	addTask: function(task){
		const existedTask = this.tasks.find(t => t.id === task.id);
		if (existedTask){
			console.log('Задача с данным id уже есть');
			return;
	    }
		this.tasks.push(task);
	},

	deleteTaskById: function(id){
		this.tasks = this.tasks.filter(task => task.id != id);
	},

	updateNameById: function(id, name){
		this.tasks = this.tasks.map(task => {
			if (task.id === id){
				task.title = name;
				return task;
			}
			else{
				return task;
			}
		})
	},
	
	updatePriorityById: function(id, priority){
		this.tasks = this.tasks.map(task => {
			if (task.id === id){
				task.priority = priority;
				return task;
			}
			else{
				return task;
			}
		})
	},

	sortTasksByPriority: function(){
		this.tasks.sort((a,b) => a.priority - b.priority);
	},
};

console.log(ToDoList.tasks);
ToDoList.addTask({title: "Составить отчёт за январь", id: 2, priority: 2},);
ToDoList.addTask({title: "Позвонить клиенту по заказу №1287", id: 3, priority: 3});
ToDoList.addTask({title: "Закупить канцелярию на квартал", id: 4, priority: 1});
ToDoList.deleteTaskById(2);
ToDoList.updateNameById(3,"Позвонить маме");
ToDoList.updatePriorityById(3,2);
ToDoList.sortTasksByPriority();
console.log(ToDoList.tasks);