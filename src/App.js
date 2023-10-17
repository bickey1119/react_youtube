import { useState, useRef } from "react"; //グローバル変数的なものを扱う
import TodoList from "./TodoList";
import { v4 as uuidv4} from "uuid"; //ランダムなidを付けてくれる

function App() {
  const [todos, setTodos] = useState([]); //todosはオブジェクト(部品の集まり),setTodosは
  
  const todoNameRef = useRef()

  const handleAddTodo = () => {
    //タスクを追加する
    const name = todoNameRef.current.value
    if (name === "") return
    setTodos((prevTodos) => {
      return [...prevTodos, {id: uuidv4(), name: name, completed: false}] //スプレッド構文。前のTodosに右側の新しいタスクを追加する
    })
    todoNameRef.current.value = null //更新後は空にしておく
  }

  const toggleTodo = (id) => {
    const newTodos = [...todos]
    const todo = newTodos.find((todo) => todo.id === id) //find以下の条件式に合うものだけをtodoに入れる
    todo.completed = !todo.completed //チェックを入れる、外す
    setTodos(newTodos) //更新
  }

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }
  
  //タスクが追加されたときだけレンダリング(画面リロード)してほしい
  return ( //TodoListコンポーネントにpropsのtodosを渡す
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo}/> 
      <input type="text" ref={todoNameRef}/>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
}

export default App;
