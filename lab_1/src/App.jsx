import { useState } from 'react';
import './App.css';

function App() {
  const [isHighlighted, setIsHihlighted] = useState(false);

  return (
    <div>
      <button onClick={() => setIsHihlighted(!isHighlighted)}>
        Переключить подсветку
      </button>
      <p className={isHighlighted ? 'highlight':''}>
        Текст для подсветки.
      </p>
    </div>
  )
}

export default App;
