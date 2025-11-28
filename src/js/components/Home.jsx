import React, {useState} from "react";

function Home() {

  const [toDos, setToDos] = useState(["laundry", "coding"]);
  const [inputValue, setInputValue] = useState('')

      const handleFormSubmit = (e) => {
          e.preventDefault();
          setToDos([...toDos, inputValue]);
      }
  
      const deleteToDo = (toDo) => {
          setToDos(toDos.filter(str => str !== toDo));
      }
      
      const renderToDos = toDos.map((toDo, index)=> (
          <li key={index}>
              <div className="position-relative todo">
                  <label>{toDo}</label>
                  <button className="delete position-absolute end-0 top-50 translate-middle" onClick={() => deleteToDo(toDo)}>x</button>
              </div>
          </li>
      ));

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
          <div>
            {renderToDos}
        </div>
      </div>
    </div>
  );
}

export default Home;
