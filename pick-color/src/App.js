import Input from './Input';
import Square from './Square';
import { createContext, useContext, useState } from 'react';
const PostContext = createContext();

function App() {
  const [colorValue, setColorValue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkText, setIsDarkText] = useState('');

  return (
    <div className='App'>
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
