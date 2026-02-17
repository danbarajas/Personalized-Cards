import './App.css'
import Dominic from './cards/Dominic/Dominic.jsx';
import Person2 from './cards/Person2/Person2.jsx';
import Person3 from './cards/Person3/Person3.jsx';
import Person4 from './cards/Person4/Person4.jsx';
import Person5 from './cards/Person5/Person5.jsx';
import Person6 from './cards/Person6/Person6.jsx';
import Person7 from './cards/Person7/Person7.jsx';
import Person8 from './cards/Person8/Person8.jsx';
import Dan from './cards/Dan/Dan.jsx';
import Person10 from './cards/Person10/Person10.jsx';

function App() {
  return (
    <>
      <h1 className="text-5xl text-center mb-2">Personalized Cards</h1>
      <h2 className="text-md text-center mb-8">ACM SIG WebDev Spring 2026</h2>

      <div className="grid grid-cols-[repeat(4,200px)] auto-rows-[200px] gap-3 p-3 rounded-lg shadow-xl">
        <Dominic />
        <Person2 />
        <Person3 />
        <Person4 />
        <Person5 />
        <Person6 />
        <Person7 />
        <Person8 />
        <Dan />
        <Person10 />
      </div>
    </>
  )
}

export default App
