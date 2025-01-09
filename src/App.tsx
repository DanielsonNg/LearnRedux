import './App.css'
import Counter from './components/Counter'

//Store  Global State
interface CounterState{
  value: number
}

interface USerState{
  isSignedIn: boolean
}

//Action  Action to state
const increment = {type: "INCREMENT"}
// const incrementByAmount = {type: "INCREMENT", payload: 10}
const decrement = {type: "DECREMENT"}

//Reducers  Taking Action depend on type and make update 


function App() {
  return (
    <>
      <h2>Redux Tutorial</h2>
      <Counter />
    </>
  )
}

export default App
