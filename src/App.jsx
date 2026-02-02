import './App.css'
import TemplateHorizontal from './cards/TemplateHorizontal.jsx';
import TemplateSquare from './cards/TemplateSquare.jsx';
import TemplateVertical from './cards/TemplateVertical.jsx';

function App() {
  return (
    <>
      <h1 className="text-5xl text-center mb-2">Personalized Cards</h1>
      <h2 className="text-md text-center mb-8">ACM SIG WebDev Spring 2026</h2>

      <div className="grid grid-cols-[repeat(4,200px)] auto-rows-[200px] gap-3 p-3 rounded-lg shadow-xl">
        <TemplateHorizontal />
        <TemplateVertical />
        <TemplateVertical />
        <TemplateSquare />
        <TemplateSquare />
      </div>
    </>
  )
}

export default App
