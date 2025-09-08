import './App.css'

import data from '../data.json'

import Resume from './components/resume'

function App() {
  return (
    <Resume data={data} />
  )
}

export default App
