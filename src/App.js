import { useState } from "react";

function App() {
  const [value, SetValue] = useState("")
  const [NewValue, SetNewValue] = useState([])
  const [che, setche] = useState(false)
  function getList(e) {
    e.preventDefault()
    NewValue.push(value)
    console.log(value)
    console.log(NewValue)
    localStorage.setItem('Data', NewValue);
  }
  function Delete(e) {
    console.log(e.target)
  }

  return (
    <>
      <div>
        <form onSubmit={getList}>
          <input type="text" placeholder="Enter name" onChange={(e) => SetValue(e.target.value)}>
          </input>
          <button>add</button>
        </form>
        <ul>
          {
            NewValue.map((e, i) => <li key={i}><input type="checkbox" onClick={setche(!che)}></input>{e}  <button key={i} onClick={Delete}>Delete</button></li>)
          }
        </ul>
      </div >
    </>
  )
}

export default App;
