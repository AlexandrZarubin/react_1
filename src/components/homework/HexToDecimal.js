import './HexToDecimal.css';

function HexToDecimal(props) {
  const hex = props.hex;  
  const decimal = parseInt(hex, 16); // перевод из 16-ричной в 10-ричную

  return (
    <div className="hexToDecimal">
      <h3>Перевод из шестнадцатеричной в десятичную</h3>
      <p>
        {hex} {"->"} {decimal}
      </p>
    </div>
  );
}

export default HexToDecimal;
