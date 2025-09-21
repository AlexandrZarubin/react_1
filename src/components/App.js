import logo from '../logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Footer from './Footer';

// ----------------------------------------------
import Factorial from './homework/Factorial';
import Power from './homework/Power';
import BinaryConverter from './homework/BinaryConverter';
import HexConverter from './homework/HexConverter';
import DecimalConverter from './homework/DecimalConverter';
import HexToDecimal from './homework/HexToDecimal';

function App() {
  const [value, setValue] = useState("");
  const decimalValue = parseInt(value);      
  const binaryValue = decimalValue.toString(2);
  return (
    <div className="App">
      <Header/>
      <Article title='Процедурное програмирование' content='изучает базовые конструкций языка C++'/>
      <Article title='ООП на C++' content='Изучаем объектное оринтерирование '/>
      <Footer/>
      <input
        type="text"
        placeholder="Введите число"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
       <Factorial number={parseInt(value)} />
      <Power base={parseInt(value)} exponent={2} />  
      <BinaryConverter number={parseInt(value)} />
      <HexConverter number={parseInt(value)} />
      <DecimalConverter binary={binaryValue} />
      <HexToDecimal hex={value} />
    </div>
  );
}

export default App;
