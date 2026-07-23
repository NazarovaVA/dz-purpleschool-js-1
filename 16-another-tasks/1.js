const ToDoList = {
	tasks: [],

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
				task.name = name;
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
				task.order = priority;
				return task;
			}
			else{
				return task;
			}
		})
	},

	sortTasksByPriority: function(){
		this.tasks.sort((a,b) => a.order - b.order);
	},
};


const newTask = {
    tasks: [{ 
		id: 1, 
		name: 'тест', 
		description: 'описание',
		order: 0,
	}],
}

console.log(newTask.tasks);
ToDoList.addTask.call(newTask,{id: 2, name: 'тест2', description: 'ещё описание', order: 1});
ToDoList.addTask.call(newTask,{id: 3, name: 'тест3', description: 'ещё больше описания', order: 2});
ToDoList.addTask.call(newTask,{id: 4, name: 'тест4', description: 'ещё очень много описания', order: 1});
ToDoList.deleteTaskById.call(newTask,2);
ToDoList.updateNameById.call(newTask,1,'новый тест');
ToDoList.updatePriorityById.call(newTask,1,3);
ToDoList.sortTasksByPriority.call(newTask);
console.log(newTask.tasks);