import './DecimalConverter.css';

function DecimalConverter(props) {
  const binary = props.binary; 
  const decimal = parseInt(binary, 2); // перевод из двоичной (2) в десятичную

  return (
    <div className="decimal">
      <h3>Перевод из двоичной в десятичную</h3>
      <p>
        {binary} {"->"} {decimal}
      </p>
    </div>
  );
}

export default DecimalConverter;
