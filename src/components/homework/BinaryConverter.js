import './BinaryConverter.css';

function BinaryConverter(props) {
  const number = props.number;
  const binary = number.toString(2); 

  return (
    <div className="binary">
      <h3>Перевод в двоичную систему</h3>
      <p>
        {number} {"->"} {binary}
      </p>
    </div>
  );
}

export default BinaryConverter;
