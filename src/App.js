import './App.css';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useState } from 'react';

const initialState = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },

]


function App() {
  const [state, setState] = useState(initialState);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0)
  };
  return (
    <div className="App">
      <div class="w-screen h-screen p-10 bg-gray-100 text-slate-700">

        <h1 class="max-w-md mx-auto text-center text-2xl font-bold">
          Simple Counter Application
            </h1>


        <div class="max-w-md mx-auto mt-10 space-y-5">
          <Counter></Counter>
          <Counter></Counter>
          <Stats count={totalCount()}></Stats>
        </div>
      </div>

    </div>
  );
}

export default App;
