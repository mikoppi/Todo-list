class CreateTask {
  constructor(title, description, dueDate, priorityNumber) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priorityNumber = priorityNumber;
  }

  setTitle(title) {
    this.title = title;
  }

  getTitle() {
    return this.title;
  }

  setDesc(description) {
    this.description = description;
  }

  getDesc() {
    return this.description;
  }

  setDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDate() {
    return this.dueDate;
  }
}

export default CreateTask;
