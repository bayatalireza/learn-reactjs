import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Logo from './components/Logo';

function App() {
  const[items, setItems] = useState([])

  const handleAddItems = (item)=>{
    setItems(items=>[...items, item])
  }
  return (
    <div className="App">
      <Logo />
      <Form  onAddItems={handleAddItems}/>
    </div>
  );
}

export default App;
