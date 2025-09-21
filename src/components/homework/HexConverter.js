import './HexConverter.css';

function HexConverter(props) {
  const number = props.number;  
  const hex = number.toString(16).toUpperCase(); // перевод в 16-ричную систему

  return (
    <div className="hex">
      <h3>Перевод в шестнадцатеричную систему</h3>
      <p>
        {number} {"->"} {hex}
      </p>
    </div>
  );
}

export default HexConverter;
