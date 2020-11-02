// function Contact(firstName, lastName, phoneNumber) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.phoneNumber = phoneNumber;
// }

function ToDoList() {
  this.tasks = [];
  this.currentId = 0;
  //this.item = item;
}

function ToDo(task) {
  this.task = task;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

ToDoList.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}

ToDoList.prototype.deleteTask = function(id) {
  for (let i = 0; i<this.tasks.length; i++) {
    if(this.tasks[i]) {
      if(this.tasks[i].id == id) {
        delete this.tasks[i];
        return true;
      }
    }
  };
  return false;
}