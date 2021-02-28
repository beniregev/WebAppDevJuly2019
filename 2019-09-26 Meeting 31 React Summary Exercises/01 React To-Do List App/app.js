class TodoModel {
  constructor(id, text) {
    this.id = id;
    this.text = text;
    this.isActive = true;
    this.isVisible = false;
  }

  toString() {
    return ("{ \"id\": " + this.id + ", \"text\": \"" + this.text + "\", \"isActive\": \"" + this.isActive + "\"isVisible\": " + this.isVisible + " }");
  }
};

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, title: '', text: '' };

    this.toggle = this.toggle.bind(this);
    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value });
  }
  handleChangeText(event) {
    this.setState({ text: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (

      <div>
        <h1>React Bootstrap Modal Example</h1>
        <Button color="success" onClick={this.toggle}>React Modal</Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>{this.state.title}</ModalHeader>
            <ModalBody>
              You are about to delete an active task. Are you sure?
            </ModalBody>
            <ModalFooter>
              <input type="submit" value="Submit" color="primary" className="btn btn-primary" />
              <Button color="danger" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>

    );
  }
}

class FormTodos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      newTask: '',
      show: false,
      nextIndex: 1,
      modalIsOpen: false,
      todoIdToDelete: -1,
      todoIndexToDelete: -1,
    }
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.allowDelete = this.allowDelete.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChangeToDoInput = this.onChangeToDoInput.bind(this);
    this.onCheckBoxChanged = this.onCheckBoxChanged.bind(this);
    this.getTaskIdFromAttributes = this.getTaskIdFromAttributes.bind(this);
    this.getTaskIndexInArrayById = this.getTaskIndexInArrayById.bind(this);
  }

  onChangeToDoInput(event) {
    if (event.target.value) {
      console.log("name: " + event.target.value);
    }
  }

  handleKeyPress(event) {
    if (event.charCode == 13) {
      console.log('Enter clicked!!!');
      this.addTask(event);
    }
  }

  addTask(event) {
    event.preventDefault();

    console.log("addTask(event) --> event.target.value = " + event.target.value);
    if (event.target.value !== '') {
      let { nextIndex, todos } = this.state;

      const taskId = nextIndex;
      const taskText = event.target.value;

      console.log("taskId: " + taskId + ", text: \"" + taskText + "\"");
      const task = new TodoModel(taskId, taskText);

      todos.push(task);
      nextIndex++ ;
      this.setState({ nextIndex, todos, newTask: '' });
      
      event.target.value = '';
      console.log("FormTodos.addTask(" + taskText + ")");
    }
  }

  deleteTask(event) {
    // event.target.parentElement.parentElement.children[0].children[0].childNodes[0].checked
    console.log("deleteTask(event) --> ElementId = " + event.currentTarget.id);
    console.log("deleteTask(event) --> event.target = " + event.target);
    console.log("deleteTask(event) --> event.target.parentElement.parentElement.children[0].children[0].childNodes[0].checked = " + event.target.parentElement.parentElement.children[0].children[0].childNodes[0].checked);

    //  event.currentTarget.id: "button-${todo.id}" (Note: it's tastId NOT the array index!!!)
    const tId = parseInt(event.currentTarget.id.substr(7)) - 1;
    const { attributes } = event.currentTarget;
    let { todos, todoIdToDelete, todoIndexToDelete } = this.state;

    todoIdToDelete = this.getTaskIdFromAttributes(attributes);
    todoIndexToDelete = this.getTaskIndexInArrayById(todoIdToDelete, todos);
    
    console.log("deleteTask(event) --> todoIdToDelete: " + todoIdToDelete + ", todoIndexToDelete: " + todoIndexToDelete);
    if (!todos[todoIndexToDelete].isActive) {
      // this.allowDelete(event, this.state);
      if (todoIndexToDelete > -1) {
        todos.splice(todoIndexToDelete, 1);
        this.setState({ todos, todoIdToDelete, todoIndexToDelete });
      }
    } else {
      this.setState({ todoIdToDelete, todoIndexToDelete });
      this.toggleModal();
    }

    let { classList } = event.currentTarget;
    console.log("deleteTask(event) --> classList = " + classList);
  }

  getTaskIdFromAttributes(attributes) {
    let taskId = -1;
    for (let i = 0; i < attributes.length; i++) {
      if (attributes[i].name === "todoid") {
        return parseInt(attributes[i].value);
      }
    }
    return -1;  //  Not found
  }

  getTaskIndexInArrayById(taskId, todosArray) {
    for (let index = 0; index < todosArray.length; index++) {
      if (todosArray[index].id === taskId) {
        return index;
      }
    }
    return -1;  //  Not Found
  }

  allowDelete(event, state) {
    console.log("allowDelete(event) --> state: " + state);
    let { todos, todoIdToDelete, todoIndexToDelete } = state;

    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === todoIdToDelete) {
        todoIndexToDelete = i;
        break;
      }
    }
    if (todoIndexToDelete > -1) {
      todos.splice(todoIndexToDelete, 1);
      this.setState({ todos, todoIdToDelete, todoIndexToDelete });
    }

    this.toggleModal();
  }

  toggleModal(indexToDelete) {
    console.log("toggleModal() --> Originally: this.state.show = " + this.state.show);
    this.setState({
      todoIndexToDelete: indexToDelete,
      show: !this.state.show
    });
    console.log("toggleModal() --> Finally: this.state.show = " + this.state.show);
  }

  onCheckBoxChanged(item) {
    console.log("onCheckBoxClick(item) --> ElementId = " + item.currentTarget.id);
    const taskId = parseInt(item.currentTarget.id.substr(8)) - 1;

    const { attributes } = item.currentTarget;
    let { todos, todoIdToDelete, todoIndexToDelete } = this.state;
    todoIdToDelete = this.getTaskIdFromAttributes(attributes);
    todoIndexToDelete = this.getTaskIndexInArrayById(todoIdToDelete, todos);

    todos[todoIndexToDelete].isActive = !todos[todoIndexToDelete].isActive;
    this.setState({ todos });
    // this.setState({ todoIdToDelete });
    // this.setState({ todos, todoIdToDelete });

    console.log("this.state = " + this.state);
  }

  render() {
    console.log("render() --> Start");
    // Creating an array of actor cards based on this.props.actors
    let styleCheckBox = {};
    let activeCount = 0;
    console.log("render() --> this.state.todos.map(todo => {..})");
    let todoList = this.state.todos.map(todo => {
      if (todo.isActive) {
        activeCount += 1;
        styleCheckBox = {
          // textDecorationStyle: 'inherit',
          textDecoration: 'none',
          color: '#000',
          // backgroundColor: 'transparent',
          // border: 'none',
        };
      } else {
        styleCheckBox = {
          // textDecorationStyle: 'inherit',
          textDecoration: 'line-through',
          color: '#a0a0a0',
          // backgroundColor: 'transparent',
          // border: 'none',
        };

      }

      console.log("render() --> this.state.todos.map(todo => {.. return(..); })");
      return (
        <div>
          <ReactBootstrap.Form.Check type='checkbox' id='check-api-checkbox' className="mb-2" size='lg'>
            <ReactBootstrap.Row id={`checkbox-row-${todo.id}`}
            >
              <ReactBootstrap.Col lg='1'>
                <ReactBootstrap.InputGroup.Checkbox id={`checkbox${todo.id}`}
                  style={styleCheckBox} checked={!todo.isActive}
                  todoId={todo.id} label={todo.text} aria-label={todo.text}
                  onChange={(item) => this.onCheckBoxChanged(item)}
                  isActive={todo.isActive} />
              </ReactBootstrap.Col>

              {/* <ReactBootstrap.Col lg='1'>
                <ReactBootstrap.InputGroup.Checkbox id={`checkbox${todo.id}`} style={styleCheckBox}
                  onChange={(item) => this.onCheckBoxChanged(item)} checked={!todo.isActive}
                  isActive={todo.isActive} aria-label={todo.text} />
              </ReactBootstrap.Col> */}
              <ReactBootstrap.Col>
                <ReactBootstrap.InputGroup.Text id={`label${todo.id}`} style={styleCheckBox} isActive={todo.isActive}>
                  {todo.text}
                </ReactBootstrap.InputGroup.Text>
              </ReactBootstrap.Col>
              <ReactBootstrap.Col lg='1'>
                {/* <ReactBootstrap.Button id={`button-${todo.id}`} hidden={!todo.isVisible} data-toggle="modal" data-target="#myModal" onClick={(event) => this.deleteTask(event)} variant="danger"> X </ReactBootstrap.Button> */}
                <ReactBootstrap.Button id={`button-${todo.id}`} todoId={todo.id} data-toggle="modal" data-target="#myModal" onClick={(event) => this.deleteTask(event)} variant="danger"> X </ReactBootstrap.Button>
              </ReactBootstrap.Col>
            </ReactBootstrap.Row>
          </ReactBootstrap.Form.Check>
        </div>
      );
    });

    console.log("render() --> return(..);");
    return (
      <div>
        <ReactBootstrap.Form autocomplete="off">
          <ReactBootstrap.Form.Group controlId="searchTextId" className="search-box">
            <ReactBootstrap.Form.Control
              type="text"
              placeholder="Enter Task To Do"
              onChange={this.onChangeToDoInput}
              onKeyPress={this.handleKeyPress}
              ref={element => { this.searchInput = element }}
            />
          </ReactBootstrap.Form.Group>
          <ReactBootstrap.Form.Group controlId="todoList" className="todo-list">
            {todoList}
          </ReactBootstrap.Form.Group>
          <div>{activeCount} item(s) left</div>
        </ReactBootstrap.Form>
        <ReactBootstrap.Modal show={this.state.show} isOpen={this.state.modalIsOpen}>
          <ReactBootstrap.Modal.Header toggle={this.toggleModal.bind(this)}>Confirm Task Delete</ReactBootstrap.Modal.Header>
          <ReactBootstrap.ModalBody>You are about to delete an active task. Are you sure?</ReactBootstrap.ModalBody>
          <ReactBootstrap.ModalFooter>
            <ReactBootstrap.Button color="danger" onClick={this.toggleModal.bind(this)}>Cancel</ReactBootstrap.Button>
            <ReactBootstrap.Button color="primary" onClick={(event) => { this.allowDelete(event, this.state) }} >Yes, Delete it!</ReactBootstrap.Button>
          </ReactBootstrap.ModalFooter>
        </ReactBootstrap.Modal>
      </div>
    );
    console.log("render() --> Finish");
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Creating the HTML (JSX) for the search results

    return (
      <ReactBootstrap.Container>
        <h1>To-do List App</h1>
        <FormTodos />
      </ReactBootstrap.Container>
    );
  }
}

// Main render function
ReactDOM.render(<App />, document.getElementById('root'));
