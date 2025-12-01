import React, {useState} from "react";

function Home() {
  const [toDos, setToDos] = useState([{task:"laundry", id: 0},{task:"coding", id:1}]);
  const [inputValue, setInputValue] = useState('')
  let counter = 1;

  function generateId() {
    counter +=1;
    return counter;
  }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(!inputValue.trim()){
          return;
        }
        setToDos([...toDos, {task: inputValue, id: generateId}]);
        setInputValue("");
    }
  
    const deleteToDo = (id) => {
      setToDos(toDos.filter(i => i.id !== id));
    }
      
    const renderToDos = (toDos.length !== 0 ? 
      (toDos.map((toDo, index) => (
        <li key={index}>
            <div className="position-relative todo">
                <label>{toDo.task}</label>
                <button className="delete position-absolute end-0 top-50 translate-middle" onClick={() => deleteToDo(toDo.id)}>x</button>
            </div>
        </li>))): 
        (<li key="0">
            <div className="position-relative todo">
                <label>There are no tasks</label>
            </div>
        </li>)
    );

  return (
    <div className="App">
      <div className="container mx-auto text-center">
        <h1>TODO list</h1>
      </div>
        <div className="card mx-auto p-3">
          <div className="mb-2 mx-auto">
          <form onSubmit={handleFormSubmit}>
              <input type="text"
                  autoFocus={true}
                  className="todo-input"
                  placeholder="What needs to be done?"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)} />
          </form>
          </div>
          <div className="list">
            <ul>
              {renderToDos}
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
