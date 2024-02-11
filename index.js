function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn react",
     
      isCompleted: true,
    },

    {
      text: "meet freind for lunch",
    
      isCompleted: false,
    },
    {
      text: "build todo app",
    
      isCompleted: false,
    }
  ]);
const [inputValue, setInputValue] =React.useState('');
const handleSubmit = e =>{
  // It prevent the page to refresh automaticaly.
  e.preventDefault();
  // If the input is empty, return the form
  if (!inputValue) return;
  //
  const newTodos =[...todos, {text:inputValue, isCompleted:false}];
  setTodos(newTodos);
  setInputValue('');
}
const removeTodo = e =>{
  const index = Number(e.target.key);
  const temp = [...todos];
  temp.splice(index,1);
  setTodos(temp);
}
  return (
    <div className="App">
      <h1>ToDo List</h1>
      {todos.map((t, i) => 
        <div className="todo-item" key={i} onClick={removeTodo}>
          {t.text}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={inputValue}
        placeholder='Add Todo ...'
        onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </div>
  );
}
ReactDOM.render(
<App />, 
document.getElementById('root')
)
