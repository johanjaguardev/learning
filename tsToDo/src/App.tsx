import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
type Place = 'home' | 'work' | {custom:string}
type Todo = Readonly<{
  id: number
  text: string
  done: boolean
  place?: Place
}>


type CompletedTodo = Todo & {
  readonly done: true
}

// Little Duckling’s implementation
function placeToString(place: Place): string {
  if (place === 'home') {
    return ' Home'
  } else if (place === 'work') {
    return ' Work'
  } else {
    // place is guaranteed to be { custom: string }
    return ' ' + place.custom
  }
}

function toggleTodo(todo: Todo): Todo {
  return {
    id: todo.id,
    text: todo.text,
    done: !todo.done
  }
}

function completeAll(
  todos: readonly Todo[]
): CompletedTodo[] {
  return todos.map(todo => ({
    ...todo,
    done: true
  }))
}

export default App
