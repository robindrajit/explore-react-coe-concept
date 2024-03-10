import './App.css'
import Counter from './Count'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'

function App() {
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }
  const addToFive = (num) =>{
    alert(num + 5)
  }
  return (
    <>
      <h3>React Core Concepts</h3>
      <Counter></Counter>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third btton clicked')}}>Third</button>
      <button onClick={()=> addToFive(3)}>Four</button>
    </>
  )
}

export default App
