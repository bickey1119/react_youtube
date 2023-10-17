import React from 'react'
import Todo from './Todo';

const TodoList = ({todos, toggleTodo}) => {
  return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>); //mapは配列内の要素(この場合はTodo1,Todo2)を取り出す。Todoコンポーネントの見分けでkey設定
};

export default TodoList