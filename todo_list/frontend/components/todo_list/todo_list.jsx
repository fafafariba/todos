import React from 'react';
import TodoListItem from './todo_list_item';

// class TodoList extends React.Component {
//   constructor({receiveTodo, todos}) {
//     super();
//     this.todos = todos;
//     this.receiveTodo = receiveTodo;
//   }
//
//   todoTitles() {
//     return this.todos.map( (todo, idx) => <li key={idx}>{todo.title}</li>;
//     });
//   }
//
//   render () {
//     return (
//       <ul>
//         {this.todoTitles()}
//       </ul>
//     );
//   }
// }


const TodoList = ({receiveTodo, todos}) => {
  console.log(todos);
  return (
    <div>
      <ul>
        {todos.map( (todo, idx) => <TodoListItem todo={todo} key={idx} />)}
      </ul>
      {<TodoForm receiveTodo={receiveTodo}/>}
      // (pass in form)
    </div>
  );
};

export default TodoList;
