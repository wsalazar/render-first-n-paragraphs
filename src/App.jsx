import { useState } from "react";
import  data from  './data';
import { nanoid } from "nanoid";

const App = () => {
  const [count, setCount] = useState(1)
  const [text, setText] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    const amount = parseInt(count)
    const newText = data.slice(0, amount)
    setText(newText)
  }

  return (
    <>
    <form id="lorem-ipsum" onSubmit={handleSubmit}>
      <label htmlFor="number">Paragraphs</label>
      <input 
      name="number" 
      id="number" 
      type="number" 
      value={count} 
      min="1" max="8" 
      step="1" 
      onChange={(e) => setCount(e.target.value)}
      />
      <button type="submit" className="btn" >Generate</button>
    </form>
    {text.map((paragraph) => {
      return <div key={nanoid()}>
        <p>{paragraph}</p>
        <br />
        <br />
      </div>
    })}
    </>
  )
};
export default App;
